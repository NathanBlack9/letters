
$(document).ready(function () {
  $(window).bind('mousewheel', function (event) {

    const $letter = $('.js-scroll-left');
    const $info = $('.js-scroll-right');
    const $letterWidth = $letter[0].scrollHeight; // ширина первого блока с БУКВОЙ
    const $infoHeight = $info[0].scrollHeight; // высота блока с инфой 
    const $coefficient = $infoHeight / $letterWidth;

    /* Scroll Animations */
    const $star = $('.js-star-animate');

    // console.log($letter[0].scrollHeight);
    // console.log($letter[0].clientHeight);
    // console.log($letter[0].offsetHeight);

    var $scrollPos = $letter.scrollTop();

    if (event.originalEvent.wheelDelta / 120 > 0) {
      // console.log('scrolling up !');
      $letter.stop().animate({ scrollTop: ($scrollPos - 200) * $coefficient }, 500);
      $info.stop().animate({ scrollTop: $scrollPos - 200 }, 500);

    }
    else {
      // console.log('scrolling down !');
      $letter.stop().animate({ scrollTop: ($scrollPos + 200) * $coefficient }, 500);
      $info.stop().animate({ scrollTop: $scrollPos + 200 }, 500);

      // matrix(0.939693, 0.34202, -0.34202, 0.939693, 0, 0)
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