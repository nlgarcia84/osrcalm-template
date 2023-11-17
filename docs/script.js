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
const allServiceHeaderElement2 = document.getElementById(
  'allServices__header2'
);
const allServicesNameElement1 = document.getElementById('allServices__name1');
const allServicesNameElement2 = document.getElementById('allServices__name2');
const allServicesBodyElement1 = document.getElementById('allServicesbody1');
const allServicesBodyElement2 = document.getElementById('allServicesbody2');

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

// SERVICIO DE CONSERJERIA

const activateDesactivateBodyService1 = () => {
  allServicesBodyElement1.classList.toggle('allServices__body--animation');
};

const activateDesactivateHeaderService1 = () => {
  allServiceHeaderElement1.classList.toggle('allServices__header--active');
  allServicesNameElement1.classList.toggle('allServices__name--active');
  if (plusElement.src.includes('plus-solidWhite.svg')) {
    plusElement.src = 'assets/icons/minus-solid.svg';
    activateDesactivateBodyService1();
  } else {
    plusElement.src = 'assets/icons/plus-solidWhite.svg';
    activateDesactivateBodyService1();
  }
  console.log('click');
};

allServiceHeaderElement1.addEventListener(
  'click',
  activateDesactivateHeaderService1
);

const activateDesactivateBodyService2 = () => {
  allServicesBodyElement2.classList.toggle('allServices__body--animation');
};

const activateDesactivateHeaderService2 = () => {
  allServiceHeaderElement2.classList.toggle('allServices__header--active');
  allServicesNameElement2.classList.toggle('allServices__name--active');
  if (plusElement.src.includes('plus-solidWhite.svg')) {
    plusElement.src = 'assets/icons/minus-solid.svg';
    activateDesactivateBodyService2();
  } else {
    plusElement.src = 'assets/icons/plus-solidWhite.svg';
    activateDesactivateBodyService2();
  }
  console.log('click');
};

allServiceHeaderElement2.addEventListener(
  'click',
  activateDesactivateHeaderService2
);
