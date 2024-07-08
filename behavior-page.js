import Carousel from './carousel';

const carouselControls = document.querySelector('#carousel-controls');
const carousel = new Carousel({
  root: document.querySelector('#carousel'),
  navigationControls: carouselControls.content.cloneNode(true),
});
