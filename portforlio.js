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

  function enableBodyScrolling() {
    const { style } = document.body;
    const scrollY = style.top;
    style.position = '';
    style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  }

  function disableBodyScrolling() {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const { style } = document.body;
    style.position = 'fixed';
    style.top = `-${scrollY}`;
  }

  sideMenuButton.addEventListener('click', () => {
    toggleModalVisibility();
  });
  closemodal.addEventListener('click', () => {
    toggleModalVisibility();
  });

  closeDetails.addEventListener('click', () => {
    enableBodyScrolling();
    detailsModal.classList.add('hidden');
  });
  closeDetailsDesktop.addEventListener('click', () => {
    enableBodyScrolling();
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
  const sectionHeadline = document.createElement('h2');
  const horizontalLine = document.createElement('hr');
  const divGrid = document.createElement('div');
  sectionHeadline.classList.add('headline');
  sectionHeadline.textContent = 'My Recent Works';
  horizontalLine.classList.add('line');
  divGrid.classList.add('grid');

  const sectionPortfolio = document.getElementById('portfolio');
  sectionPortfolio.appendChild(sectionHeadline);
  sectionPortfolio.appendChild(horizontalLine);
  sectionPortfolio.appendChild(divGrid);

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
    divGrid.appendChild(clonedNode);

    showProjectButton.addEventListener('click', () => {
      detailsModal.classList.remove('hidden');
      disableBodyScrolling();

      const paragraghDescription = detailsModal.querySelector('p');
      const detailsHeader = detailsModal.querySelector('h3.details-heading');
      const seeLiveBtn = detailsModal.querySelector('#see-live');
      const seeSourceBtn = detailsModal.querySelector('#see-source');
      const seeLiveMobileBtn = detailsModal.querySelector('#see-live-mobile');
      const seeSourceMobileBtn = detailsModal.querySelector('#see-source-mobile');

      seeLiveMobileBtn.addEventListener('click', () => {
        window.open(project.link_to_live, '_blank');
      });

      seeLiveBtn.addEventListener('click', () => {
        window.open(project.link_to_live, '_blank');
      });

      seeSourceMobileBtn.addEventListener('click', () => {
        window.location.href = project.link_to_source;
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
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });

  const contactUsForm = document.getElementById('contact-us-form');

  function showMessage(input, message, type) {
    const msg = document.querySelector('small');
    msg.innerText = message;
    msg.classList.add('error');
    msg.classList.add('msg');
    input.classList.add(type ? 'success' : 'error');
    return type;
  }

  function showError(input, message) {
    return showMessage(input, message, false);
  }

  function showSuccess(input) {
    return showMessage(input, '', true);
  }

  function isLowerCase(input, message) {
    if (input.value.trim().toLowerCase() !== input.value) {
      return showError(input, message);
    }
    return showSuccess(input);
  }

  function validateEmail(input, message) {
    if (!isLowerCase(input, message)) {
      return false;
    }
    return true;
  }

  contactUsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailField = contactUsForm.elements.email;
    const emailValid = validateEmail(emailField, 'Your Email is not lowercase');

    if (emailValid) {
      contactUsForm.submit();
    }
  });
};