const burger = document.querySelector('.burger');
const burgerSpan = document.querySelectorAll('.burger span');
const nav = document.querySelector('.nav');
let move = false;

burger.addEventListener('click', () => {
  if (!move) {
    burgerSpan[1].classList.add('rmSecond');
    burgerSpan[0].classList.add('centerizing', 'rotF');
    burgerSpan[2].classList.add('centerizing', 'rotL');
    burger.classList.add('burger-flow');
    nav.classList.add('flex');
  } else {
    burgerSpan[1].classList.remove('rmSecond');
    burgerSpan[0].classList.remove('centerizing', 'rotF');
    burgerSpan[2].classList.remove('centerizing', 'rotL');
    burger.classList.remove('burger-flow');
    nav.classList.remove('flex');
  }
  move = !move;
});

$(function () {
  var $videoContainer = $('.video'),
    $videoControl = $('.video-control'),
    $video = $('#video')[0];

  $videoControl.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('is-playing');
    }
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
