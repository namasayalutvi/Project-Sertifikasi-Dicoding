const checkBox = document.getElementById('checkbox');
const nav = document.querySelectorAll('.nav-link');
const main = document.querySelectorAll('.main p');
const h2 = document.querySelectorAll('.main h2');

checkBox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  for (let i = 0; i < nav.length; i++) {
    nav[i].classList.toggle('dark');
  }
  for (let i = 0; i < main.length; i++) {
    main[i].classList.toggle('dark');
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].classList.toggle('dark');
  }
});

const tDark = document.querySelector('.label');
const tombol = document.querySelector('.tombol');

checkBox.addEventListener('change', () => {
  tDark.classList.toggle('dark');
  tombol.classList.toggle('dark');
});

// DOM untuk slider nav-bar pada mode mobile
const navBar = document.querySelector('.hamburger-nav input');
const items = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
  items.classList.toggle('slide');
});
