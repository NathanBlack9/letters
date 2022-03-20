$(document).ready( () => {
  const $this = $('.area__left');

  $this.addClass('_animated');
  // const $this = $('.area__left>img');
  // const $defaultPos = $this.css('right');

  // // повторить с интервалом 1 секунда
  // let timerId = setInterval(() =>  {
  //   let $pos = $defaultPos;
  //   $this.clone().appendTo($parent).css('right', '+='+ $pos +'')
  // }, 1000);

  // // остановить вывод через 3 секунд
  // setTimeout(() => { clearInterval(timerId); }, 3000);
});
