const sideMenuButton = document.getElementById('side-menu-button');
const sideMenuModal = document.getElementById('mobile-menu-modal');
const mainPage = document.getElementById('main-page-content');
const closemodal = document.querySelector('.close-modal')
const menuItems = document.querySelectorAll('.mobile-menu-list-item');

let isVisible = false;


function toggleModalVisibility() {
  isVisible = !isVisible;
  sideMenuModal.classList.toggle('is-visible');
  mainPage.style.display = isVisible ? 'none' : 'block';
}

sideMenuButton.addEventListener('click', () => {
  toggleModalVisibility();
});
closemodal.addEventListener('click', () =>{
  toggleModalVisibility();
});


menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (ev) => {
    toggleModalVisibility();
    window.location.hash = ev.target.getAttribute('data-location');
  });
});