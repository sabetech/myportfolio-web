const sideMenuButton = document.getElementById('side-menu-button');
const sideMenuModal = document.getElementById('mobile-menu-modal');
const mainPage = document.getElementById('main-page-content');
const closemodal = document.querySelector('.close-modal')
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

