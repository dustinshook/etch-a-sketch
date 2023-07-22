
function initGrid(squares) {
  const divContainer = document.getElementById('my-grid');
  divContainer.innerHTML = '';

  for (let i = 0; i < squares * squares; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.dataset.opacity = 0;
    div.dataset.color = '#3e4756';
    div.dataset.stroke = 0.1;
    divContainer.appendChild(div);
  }

  divContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

  const gridItems = document.querySelectorAll('.grid-item');

  // mouseover event
  gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.dataset.opacity = Number(item.dataset.opacity) + Number(item.dataset.stroke);
      item.style.backgroundColor = `rgba(${hexToRgb(item.dataset.color)}, ${item.dataset.opacity})`;
    });
  });

  // click to erase event
  gridItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.dataset.opacity = 0;
      item.style.backgroundColor = "#fff";
    });
  });


}

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16); // 0, 2
  const g = parseInt(hex.substring(3, 5), 16); // 2, 4
  const b = parseInt(hex.substring(5, 7), 16); // 4, 6
  return `${r}, ${g}, ${b}`;
}
// dom content loaded
document.addEventListener('DOMContentLoaded', () => {

  initGrid(16);

  const reset = document.getElementById('reset');
  const resize = document.getElementById('size');
  const apply = document.getElementById('apply');

  reset.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
      item.dataset.opacity = 0;
      item.style.backgroundColor = "#fff";
    });
  });

  resize.addEventListener('click', () => {
    let squares = prompt('How many squares per side?');
    if (squares === null) squares = 16;
    if (squares < 1) squares = 1;
    if (squares > 100) squares = 100;
    initGrid(squares);
  });

  apply.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const color = document.getElementById('color-picker');
    const stroke = Number(document.getElementById('shading').value);

    gridItems.forEach((item) => {
      item.dataset.color = color.value;
      item.dataset.stroke = stroke / 100;
    });

  });

});


