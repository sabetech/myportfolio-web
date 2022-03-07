const sideMenuButton = document.getElementById('side-menu-button');
const sideMenuModal = document.getElementById('mobile-menu-modal');
const mainPage = document.getElementById('main-page-content');
let isVisible = false;

function toggleModalVisibility() {
  isVisible = !isVisible;
  sideMenuModal.classList.toggle('is-visible');
  mainPage.style.display = isVisible ? 'none' : 'block';
}

sideMenuButton.addEventListener('click', () => {
  toggleModalVisibility();
});
