const divContainer = document.getElementById('my-grid');

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  divContainer.appendChild(div);
}