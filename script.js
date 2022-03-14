function changeCursor() {
  const cursor = $('.cursor');
  const follower = $('.follower');
  const links = document.querySelectorAll('a');

  let followerPosX = 0;
  let followerPosY = 0;
 
  let cursorPosX = 0;
  let cursorPosY = 0;

  TweenMax.to({}, 0.01, {
    repeat: -1,
    onRepeat: () => {
      followerPosX += (cursorPosX - followerPosX) / 8; /* 5 - скорость */
      followerPosY += (cursorPosY - followerPosY) / 8; /* 5 - скорость */

      TweenMax.set(follower, {
        css: {
          left: followerPosX - 12,
          top: followerPosY - 12
        }
      });

      TweenMax.set(cursor, {
        css: {
          left: cursorPosX,
          top: cursorPosY
        }
      })
    }
  });

  $(window).mousemove(function (e) { 
    cursorPosX = e.clientX;
    cursorPosY = e.clientY;
  });


  links.forEach(link => {
    link.addEventListener('mouseenter', function () {
      cursor.addClass('active');
      follower.addClass('active');
    });
    link.addEventListener('mouseleave', function () {
      cursor.removeClass('active');
      follower.removeClass('active');
    });
  });
}

changeCursor();