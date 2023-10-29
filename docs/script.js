const menuIconElement = document.getElementById('menu-icon');

const closeMenuElement = document.getElementById('closeMenu');

const dropdownActivateElement = document.getElementById('dropdownActivate');

const rootStyles = document.documentElement.style;

const ctaTitleElement = document.getElementById('cta-title');

const emptyElement = document.getElementById('empty');

const plusElement = document.querySelector('.fa-plus');

const allServicesDropdownElement = document.querySelector(
  '.allServices__dropdown'
);

/* MODIFIERS BURGER MENU */

const activateDropdown = () => {
  dropdownActivateElement.classList.remove('slideOutUp');
  dropdownActivateElement.classList.add('slideInDown');
  rootStyles.setProperty('--dropDown-display', 'block');
  rootStyles.setProperty('--closeMenuX-display', 'block');
  rootStyles.setProperty('--closeMenuBurger-display', 'none');
  rootStyles.setProperty('--empty-display', 'block');
  ctaTitleElement.classList.remove('fadeIn');
  ctaTitleElement.classList.add('fadeOut');
};

menuIconElement.addEventListener('click', activateDropdown);

const desactivateDropdown = () => {
  dropdownActivateElement.classList.remove('slideInDown');
  dropdownActivateElement.classList.add('slideOutUp');
  rootStyles.setProperty('--closeMenuX-display', 'none');
  rootStyles.setProperty('--closeMenuBurger-display', 'block');
  rootStyles.setProperty('--empty-display', 'none');
  ctaTitleElement.classList.remove('fadeOut');
  ctaTitleElement.classList.add('fadeIn');
};

closeMenuElement.addEventListener('click', desactivateDropdown);

/* MODIFIERS CARD SERVICES */

const activateItemDropdown = () => {
  allServicesDropdownElement.classList.add('slideInDown');
  rootStyles.setProperty('--itemDropdown-display', 'block');
};

plusElement.addEventListener('click', activateItemDropdown);
