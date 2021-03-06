$(document).ready(function () {
  const $window = $(window);
  const $intro = $('.intro');
  const $area = $('.area');
  const $introHeight = $intro.outerHeight(true);
  var controller = new ScrollMagic.Controller();

  const $header = $('.js-header');
  const $letter = $('.js-scroll-left');
  const $info = $('.js-scroll-right');
  const $letterWidth = $letter[0].scrollHeight; // ширина первого блока с БУКВОЙ
  const $infoHeight = $info[0].scrollHeight; // высота блока с инфой
  const $coefficient = $infoHeight / $letterWidth;

  var $scrollPos = $letter.scrollTop();

  var wipeAnimation = new TimelineMax()
    .fromTo(".js-scroll-left", 1, { x: "-110%" }, { x: "0%", ease: Linear.easeNone })  // in from left
    .fromTo(".js-scroll-right", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }); // in from top

  var $scene = new ScrollMagic.Scene({
    triggerElement: ".area",
    triggerHook: "onLeave",
    duration: "300%"
  })
    .addIndicators()
    .setPin(".area")
    .setTween(wipeAnimation)
    .addTo(controller)


  $(window).bind('mousewheel', function (event) {
    $scrollPos = $letter.scrollTop();
    // console.log($window.scrollTop() >= ($introHeight), $window.scrollTop() <= ($introHeight + 2900), ($scrollPos == 0))
    if ($window.scrollTop() >= ($introHeight)) {
      $header.removeClass('highlighted');

      if ($window.scrollTop() <= ($introHeight + 2900) && ($scrollPos == 0))
        $scene.setClassToggle(".area", "animating");
    }
    else $header.addClass('highlighted');

    if ($area.hasClass('animating')) {
      return;
    } else {

      if (event.originalEvent.wheelDelta / 120 > 0) {
        console.log('scrolling up !');
        $letter.stop().animate({ scrollTop: ($scrollPos - 200) * $coefficient }, 300);
        $info.stop().animate({ scrollTop: $scrollPos - 200 }, 300);

      }
      else {
        console.log('scrolling down !');
        console.log($scrollPos);
        $letter.stop().animate({ scrollTop: ($scrollPos + 200) * $coefficient }, 300);
        $info.stop().animate({ scrollTop: $scrollPos + 200 }, 300);
      }
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