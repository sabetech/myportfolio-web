let sideMenuButton = document.getElementById("side-menu-button");
let sideMenuModal = document.getElementById("mobile-menu-modal");
let mainPage = document.getElementById("main-page-content");
let isVisible = false;

sideMenuButton.addEventListener('click', function (ev) {

    toggleModalVisibility();

});

function toggleModalVisibility(){
    isVisible = !isVisible;
    sideMenuModal.classList.toggle('is-visible');
    mainPage.style.display = isVisible ? 'none':'block';
}