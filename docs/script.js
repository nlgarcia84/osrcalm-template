// const { root } = require("postcss");

const menuIconElement = document.getElementById('menu-icon');
const closeMenuElement = document.getElementById('closeMenu');
const dropdownActivateElement = document.getElementById('dropdownActivate');
const rootStyles = document.documentElement.style;
const ctaTitleElement = document.getElementById('cta-title');
const emptyElement = document.getElementById('empty');
const plusElement = document.getElementById('plus-solid');
const allServicesContainerElement = document.getElementById(
  'allServicesservicesContainer'
);
const allServiceHeaderElement1 = document.getElementById(
  'allServices__header1'
);
const allServicesNameElement = document.getElementById('allServices__name');
const allServicesBodyElement = document.getElementById('allServicesbody');

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

const activateBodys = () => {
  allServicesBodyElement.classList.add('allServices__body--animation');
};
const desactivateBodys = () => {
  allServicesBodyElement.classList.remove('allServices__body--animation');
};

const activateItemHeader1 = () => {
  allServiceHeaderElement1.classList.remove('allServices__header-border');
  allServiceHeaderElement1.classList.add('allServices__header--active');
  allServicesNameElement.classList.add('allServices__name--active');
  if (plusElement.src.includes('plus-solidWhite.svg')) {
    plusElement.src = 'assets/icons/minus-solid.svg';
    activateBodys();
  } else {
    allServiceHeaderElement1.classList.remove('allServices__header-border');
    allServiceHeaderElement1.classList.remove('allServices__header--active');
    allServicesNameElement.classList.remove('allServices__name--active');
    plusElement.src = 'assets/icons/plus-solidWhite.svg';
    desactivateBodys();
  }
};

allServiceHeaderElement1.addEventListener('click', activateItemHeader1);
