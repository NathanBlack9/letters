
$(document).ready(function () {
  $(window).bind('mousewheel', function (e) {

    const $letter = $('.area__left');
    var $scrollPos = $letter.scrollTop();

    if (e.originalEvent.wheelDelta / 120 > 0) {
      // console.log('scrolling up !');
      $letter.stop().animate({ scrollTop: $scrollPos - 200 }, 1000);
    }
    else {
      // console.log('scrolling down !');
      $letter.stop().animate({ scrollTop: $scrollPos + 200 }, 1000);
    }
  })
});

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