window.onload = () => {
  const sideMenuButton = document.getElementById('side-menu-button');
  const sideMenuModal = document.getElementById('mobile-menu-modal');
  const mainPage = document.getElementById('main-page-content');
  const closemodal = document.querySelector('.close-modal');
  const menuItems = document.querySelectorAll('.mobile-menu-list-item');
  const detailsModal = document.getElementById('details-modal');
  const closeDetails = document.getElementById('close-details');
  const closeDetailsDesktop = document.querySelector('.close-modal-desktop');

  let isVisible = false;

  function toggleModalVisibility() {
    isVisible = !isVisible;
    sideMenuModal.classList.toggle('is-visible');
    mainPage.style.display = isVisible ? 'none' : 'block';
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  sideMenuButton.addEventListener('click', () => {
    toggleModalVisibility();
  });
  closemodal.addEventListener('click', () => {
    toggleModalVisibility();
  });

  closeDetails.addEventListener('click', () => {
    detailsModal.classList.add('hidden');
  });
  closeDetailsDesktop.addEventListener('click', () => {
    detailsModal.classList.add('hidden');
  });

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (ev) => {
      toggleModalVisibility();
      window.location.hash = ev.target.getAttribute('data-location');
    });
  });

  const projects = [{
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://sabetech.github.io/myportfolio-web/',
    link_to_source: 'https://github.com/sabetech/myportfolio-web/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://sabetech.github.io/myportfolio-web/',
    link_to_source: 'https://github.com/sabetech/myportfolio-web/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://sabetech.github.io/myportfolio-web/',
    link_to_source: 'https://github.com/sabetech/myportfolio-web/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://sabetech.github.io/myportfolio-web/',
    link_to_source: 'https://github.com/sabetech/myportfolio-web/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://sabetech.github.io/myportfolio-web/',
    link_to_source: 'https://github.com/sabetech/myportfolio-web/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://sabetech.github.io/myportfolio-web/',
    link_to_source: 'https://github.com/sabetech/myportfolio-web/',
  },
  ];

  const listItemTemplate = document.getElementById('grid-template');
  const grid = document.querySelector('.grid');

  projects.forEach((project) => {
    const clonedNode = listItemTemplate.children[0].cloneNode(true);
    clonedNode.children[0].children[0].innerText = project.name;
    const techList = document.createElement('ul');
    techList.classList.add('tech-list');
    const showProjectButton = document.createElement('button');
    showProjectButton.type = 'button';
    showProjectButton.textContent = 'See Project';
    showProjectButton.classList.add('see-project-btn');

    project.technologies.forEach((tech) => {
      const listItem = document.createElement('li');
      listItem.classList.add('tech-item');
      listItem.textContent = tech;
      techList.appendChild(listItem);
    });

    clonedNode.children[0].children[0].appendChild(techList);
    clonedNode.children[0].children[0].appendChild(showProjectButton);
    grid.appendChild(clonedNode);

    showProjectButton.addEventListener('click', () => {
      detailsModal.classList.remove('hidden');
      const paragraghDescription = detailsModal.querySelector('p');
      const detailsHeader = detailsModal.querySelector('h3.details-heading');
      const seeLiveBtn = detailsModal.querySelector('#see-live');
      const seeSourceBtn = detailsModal.querySelector('#see-source');

      seeLiveBtn.addEventListener('click', () => {
        window.open(project.link_to_live, '_blank');
      });

      seeSourceBtn.addEventListener('click', () => {
        window.location.href = project.link_to_source;
      });
      paragraghDescription.textContent = project.description;
      detailsHeader.textContent = project.name;

      const techListdetail = document.querySelector('.details');
      removeAllChildNodes(techListdetail);
      project.technologies.forEach((tech) => {
        const listItem = document.createElement('li');
        listItem.classList.add('tag');
        listItem.textContent = tech;
        techListdetail.appendChild(listItem);
      });
    });
  });
};