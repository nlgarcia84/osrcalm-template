// const { root } = require("postcss");

// CONSTS LIST

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
const allServiceHeaderElement3 = document.getElementById(
  'allServices__header3'
);
const allServiceHeaderElement4 = document.getElementById(
  'allServices__header4'
);
const allServiceHeaderElement5 = document.getElementById(
  'allServices__header5'
);
const allServicesNameElement1 = document.getElementById('allServices__name1');
const allServicesNameElement2 = document.getElementById('allServices__name2');
const allServicesNameElement3 = document.getElementById('allServices__name3');
const allServicesNameElement4 = document.getElementById('allServices__name4');
const allServicesNameElement5 = document.getElementById('allServices__name5');

const allServicesBodyElement1 = document.getElementById('allServicesbody1');
const allServicesBodyElement2 = document.getElementById('allServicesbody2');
const allServicesBodyElement3 = document.getElementById('allServicesbody3');
const allServicesBodyElement4 = document.getElementById('allServicesbody4');
const allServicesBodyElement5 = document.getElementById('allServicesbody5');

// BURGER MENU

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

// SERVICES

// const activateDesactivateBodyService1 = () => {
//   allServicesBodyElement1.classList.toggle('allServices__body--animation');
// };

// const activateDesactivateHeaderService1 = () => {
//   allServiceHeaderElement1.classList.toggle('allServices__header--active');
//   allServicesNameElement1.classList.toggle('allServices__name--active');
//   if (plusElement.src.includes('plus-solidWhite.svg')) {
//     plusElement.src = 'assets/icons/minus-solid.svg';
//     activateDesactivateBodyService1();
//   } else {
//     plusElement.src = 'assets/icons/plus-solidWhite.svg';
//     activateDesactivateBodyService1();
//   }
//   console.log('click');
// };

// allServiceHeaderElement1.addEventListener(
//   'click',
//   activateDesactivateHeaderService1
// );

// const activateDesactivateBodyService2 = () => {
//   allServicesBodyElement2.classList.toggle('allServices__body--animation');
// };

// const activateDesactivateHeaderService2 = () => {
//   allServiceHeaderElement2.classList.toggle('allServices__header--active');
//   allServicesNameElement2.classList.toggle('allServices__name--active');
//   if (plusElement.src.includes('plus-solidWhite.svg')) {
//     plusElement.src = 'assets/icons/minus-solid.svg';
//     activateDesactivateBodyService2();
//   } else {
//     plusElement.src = 'assets/icons/plus-solidWhite.svg';
//     activateDesactivateBodyService2();
//   }
//   console.log('click');
// };

// allServiceHeaderElement2.addEventListener(
//   'click',
//   activateDesactivateHeaderService2
// );
// Función reutilizable para activar/desactivar el cuerpo y encabezado del servicio
const toggleService = (headerElement, bodyElement, nameElement) => {
  headerElement.classList.toggle('allServices__header--active');
  nameElement.classList.toggle('allServices__name--active');
  bodyElement.classList.toggle('allServices__body--animation');
};

// Función para cambiar la fuente del icono plus/minus
const togglePlusIcon = (plusElement) => {
  plusElement.src = plusElement.src.includes('plus-solidWhite.svg')
    ? 'assets/icons/minus-solid.svg'
    : 'assets/icons/plus-solidWhite.svg';
};

// Manejar eventos para el servicio 1
allServiceHeaderElement1.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement1,
    allServicesBodyElement1,
    allServicesNameElement1
  );
  togglePlusIcon(plusElement);
  console.log('click');
});

// Manejar eventos para el servicio 2
allServiceHeaderElement2.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement2,
    allServicesBodyElement2,
    allServicesNameElement2
  );
  togglePlusIcon(plusElement);
  console.log('click');
});

// Manejar eventos para el servicio 3
allServiceHeaderElement3.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement3,
    allServicesBodyElement3,
    allServicesNameElement3
  );
  togglePlusIcon(plusElement);
  console.log('click');
});

// Manejar eventos para el servicio 4
allServiceHeaderElement4.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement4,
    allServicesBodyElement4,
    allServicesNameElement4
  );
  togglePlusIcon(plusElement);
  console.log('click');
});

// Manejar eventos para el servicio 5
allServiceHeaderElement5.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement5,
    allServicesBodyElement5,
    allServicesNameElement5
  );
  togglePlusIcon(plusElement);
  console.log('click');
});
