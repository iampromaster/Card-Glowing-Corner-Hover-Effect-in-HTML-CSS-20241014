let card = document.querySelector('.card');

card.onmousemove = (event) => {
  let x = event.pageX - card.offsetLeft;
  let y = event.pageY - card.offsetTop;

  card.style.setProperty('--x', x + 'px');
  card.style.setProperty('--y', y + 'px');
}
