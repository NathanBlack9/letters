$(document).ready(function () {
  $(window).bind('mousewheel', function () {
    const $window = $(window);
    const $intro = $('.intro');
    const $introHeight = $intro.outerHeight(true);

    if ($window.scrollTop() >= ($introHeight / 4)) {
      var controller = new ScrollMagic.Controller();

      var wipeAnimation = new TimelineMax()
        .fromTo(".js-scroll-left", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
        .fromTo(".js-scroll-right", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }); // in from top

      new ScrollMagic.Scene({
        triggerElement: ".area",
        triggerHook: "onLeave",
        duration: "300%"
      })
        .setClassToggle(".area", "animating")
        .setPin(".area")
        .setTween(wipeAnimation)
        .addTo(controller);
    }

  })
});

// $(document).ready(function () {
//   $(window).bind('mousewheel', function (event) {

//     if ($('.area').hasClass('animating')) {
//       return;
//     } else {
//       const $letter = $('.js-scroll-left');
//       const $info = $('.js-scroll-right');
//       const $letterWidth = $letter[0].scrollHeight; // ширина первого блока с БУКВОЙ
//       const $infoHeight = $info[0].scrollHeight; // высота блока с инфой
//       const $coefficient = $infoHeight / $letterWidth;

//       var $scrollPos = $letter.scrollTop();

//       if (event.originalEvent.wheelDelta / 120 > 0) {
//         // console.log('scrolling up !');
//         $letter.stop().animate({ scrollTop: ($scrollPos - 200) * $coefficient }, 300);
//         $info.stop().animate({ scrollTop: $scrollPos - 200 }, 300);

//       }
//       else {
//         // console.log('scrolling down !');
//         $letter.stop().animate({ scrollTop: ($scrollPos + 200) * $coefficient }, 300);
//         $info.stop().animate({ scrollTop: $scrollPos + 200 }, 300);

//         // matrix(0.939693, 0.34202, -0.34202, 0.939693, 0, 0)
//       }
//     }
//   })
// });

// document.addEventListener('DOMContentLoaded', function () {
//   // init
//   var controller = new ScrollMagic.Controller();

//   // define movement of panels
//   var wipeAnimation = new TimelineMax()
//     .fromTo(".js-scroll-left", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
//     // .fromTo("section.panel.green", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
//     .fromTo(".js-scroll-right", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }); // in from top

//   // create scene to pin and link animation
//   new ScrollMagic.Scene({
//     triggerElement: ".area",
//     triggerHook: "onLeave",
//     duration: "300%"
//   })
//     .setClassToggle(".area", "animating")
//     .setPin(".area")
//     .setTween(wipeAnimation)
//     .addTo(controller);
// });


// $(function () {
//   if (!$('.js-scroll').length) return;
//   const $back = $('.js-scroll-back');
//   const $next = $('.js-scroll-next');
//   const $scrollBlock = $('.js-scroll');

//   if ($scrollBlock[0].scrollWidth <= $scrollBlock.width()) {
//     $back.addClass('disabled');
//     $next.addClass('disabled');
//   } else {
//     $back.addClass('disabled');
//     $next.removeClass('disabled');
//   }

//   $('.js-scroll').on('scroll', function () {
//     const $this = $(this);
//     var $scrollPos = $this.scrollLeft();
//     const $maxScrollLeft = $this[0].scrollWidth - $this[0].clientWidth; // -87
//     const $next = $('.js-scroll-next');
//     const $back = $('.js-scroll-back');

//     if ($scrollPos == 0) {
//       $back.addClass('disabled');
//       $next.removeClass('disabled');
//     } else if ($scrollPos > 0 && $scrollPos < $maxScrollLeft) {
//       $back.removeClass('disabled');
//       $next.removeClass('disabled');
//     } else if ($scrollPos == $maxScrollLeft) {
//       $next.addClass('disabled');
//       $back.removeClass('disabled');
//     }
//   })
// });

// $(document).on('click', '.js-scroll-back', function () {
//   const $scrollBlock = $('.js-scroll');
//   var $scrollPos = $scrollBlock.scrollLeft();

//   $scrollBlock.scrollLeft($scrollPos - 87);
// });

// $(document).on('click', '.js-scroll-next', function () {
//   const $scrollBlock = $('.js-scroll');
//   var $scrollPos = $scrollBlock.scrollLeft();

//   $scrollBlock.scrollLeft($scrollPos + 87);
// });