import { isRtl, getDistanceToFocalPoint } from './carousel.utils.js';

/**
 * @typedef CarouselProps
 * @property {HTMLElement} root
 * @property {HTMLOListElement} [navigationControls]
 * @property {number} [scrollDelayMs]
 */

export default class Carousel {
  /**
   * @param {CarouselProps} props
   */
  constructor(props) {
    // `this` binding for methods
    const scrollDelayMs = props.scrollDelayMs ?? 200;
    this._handleCarouselScroll = throttle(this._handleCarouselScroll.bind(this), scrollDelayMs);
    this.navigateToNextItem = this.navigateToNextItem.bind(this);

    // Initialize some member variables
    this.root = props.root;
    this.scrollContainer = this.root.querySelector('[role="region"][tabindex="0"]');
    this.mediaList = this.scrollContainer.querySelector('[role="list"]');

    // Set up event listeners and init UI
    this._insertNavigationControls(props.navigationControls);
    this.scrollContainer.addEventListener('scroll', this._handleCarouselScroll);
    this._handleCarouselScroll();
  }

  /**
   * @param {HTMLElement} controls
   */
  _insertNavigationControls(controls) {
    if (!controls) return;

    const [previous, next] = controls.querySelectorAll('button[data-direction]');
    this.navControlPrevious = previous;
    this.navControlNext = next;

    const handleNavigation = (e) => {
      const button = e.target;
      const direction = button.dataset.direction;
      const isDisabled = button.getAttribute('aria-disabled') === 'true';
      if (isDisabled) return;
      this.navigateToNextItem(direction);
    };

    this.navControlPrevious.addEventListener('click', handleNavigation);
    this.navControlNext.addEventListener('click', handleNavigation);
    this.root.appendChild(controls);
  }

  _handleCarouselScroll() {
    // scrollLeft is negative in a right-to-left writing mode
    const scrollLeft = Math.abs(this.scrollContainer.scrollLeft);
    // off-by-one correction for Chrome, where clientWidth is sometimes rounded down
    const width = this.scrollContainer.clientWidth + 1;
    const isAtStart = Math.floor(scrollLeft) === 0;
    const isAtEnd = Math.ceil(width + scrollLeft) >= this.scrollContainer.scrollWidth;
    this.navControlPrevious?.setAttribute('aria-disabled', isAtStart);
    this.navControlNext?.setAttribute('aria-disabled', isAtEnd);
  }

  /**
   * @param {'start'|'end'} direction
   */
  navigateToNextItem(direction) {
    let mediaItems = Array.from(this.mediaList.querySelectorAll(':scope > *'));
    mediaItems = direction === 'start' ? mediaItems.reverse() : mediaItems;

    // Basic idea: Find the first item whose focal point is past
    // the scroll container's center in the direction of travel.
    const scrollContainerCenter = getDistanceToFocalPoint(this.scrollContainer, 'center');
    let targetFocalPoint;
    for (const mediaItem of mediaItems) {
      let focalPoint = window.getComputedStyle(mediaItem).scrollSnapAlign;
      if (focalPoint === 'none') {
        focalPoint = 'center';
      }
      const distanceToItem = getDistanceToFocalPoint(mediaItem, focalPoint);
      if (
        (direction === 'start' && distanceToItem + 1 < scrollContainerCenter) ||
        (direction === 'end' && distanceToItem - scrollContainerCenter > 1)
      ) {
        targetFocalPoint = distanceToItem;
        break;
      }
    }

    // This should never happen, but it doesn't hurt to check
    if (typeof targetFocalPoint === 'undefined') return;
    // RTL flips the direction
    const sign = isRtl(this.root) ? -1 : 1;
    const scrollAmount = sign * (targetFocalPoint - scrollContainerCenter);
    this.scrollContainer.scrollBy({ left: scrollAmount });
  }
}
