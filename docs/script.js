// const { root } = require("postcss");

// CONSTS LIST

const menuIconElement = document.getElementById('menu-icon');
const closeMenuElement = document.getElementById('closeMenu');
const dropdownActivateElement = document.getElementById('dropdownActivate');
const rootStyles = document.documentElement.style;
const ctaTitleElement = document.getElementById('cta-title');
const emptyElement = document.getElementById('empty');
const plusElement1 = document.getElementById('plus-solid-1');
const plusElement2 = document.getElementById('plus-solid-2');
const plusElement3 = document.getElementById('plus-solid-3');
const plusElement4 = document.getElementById('plus-solid-4');
const plusElement5 = document.getElementById('plus-solid-5');
const allServicesContainerElement = document.getElementById(
  'allServicesservicesContainer'
);
const allServicesElement = document.getElementById('allServices');
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
const itemDescriptionIdElement = document.getElementById('itemDescriptionId');
const formContainer = document.getElementById('formContainer');
const formElement = document.getElementById('form');
const preloaderElement = document.getElementById('preloader');
const successMsgElement = document.getElementById('successMsg');
const inputNameElement = document.querySelectorAll('.form-item');
const check1Element = document.getElementById('check1');
const check2Element = document.getElementById('check2');
const checkboxesElement = document.querySelector('.checkbox');
const submitButtonElement = document.querySelector('.form__submitButton');

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

  togglePlusIcon(plusElement1);
  console.log('click');
});

// Manejar eventos para el servicio 2
allServiceHeaderElement2.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement2,
    allServicesBodyElement2,
    allServicesNameElement2
  );
  togglePlusIcon(plusElement2);
  console.log('click');
});

// Manejar eventos para el servicio 3
allServiceHeaderElement3.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement3,
    allServicesBodyElement3,
    allServicesNameElement3
  );
  togglePlusIcon(plusElement3);
  console.log('click');
});

// Manejar eventos para el servicio 4
allServiceHeaderElement4.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement4,
    allServicesBodyElement4,
    allServicesNameElement4
  );
  togglePlusIcon(plusElement4);
  console.log('click');
});

// Manejar eventos para el servicio 5
allServiceHeaderElement5.addEventListener('click', () => {
  toggleService(
    allServiceHeaderElement5,
    allServicesBodyElement5,
    allServicesNameElement5
  );
  togglePlusIcon(plusElement5);
  console.log('click');
});

// Manejador del boton submit del formulario

formElement.addEventListener('submit', (e) => {
  console.log('enviado');
  e.preventDefault();
  // Se comprueba si están los checkbox marcados
  if (!check1Element.checked || !check2Element.checked) {
    submitButtonElement.setAttribute('disabled');
  } else {
    submitButtonElement.removeAttribute('disabled');
  }

  // Desvanecimiento del contenedor formulario
  formContainer.classList.add('form__container--desactivated');
  // Activación del preloader durante 1000ms
  setTimeout(activatePreloader, 1000);
  console.log(e.target.parentElement);
  // Termina el preloader y aparece el mensaje
  setTimeout(() => {
    formContainer.classList.remove('form__container--desactivated');
    successMsgElement.textContent = 'Mensaje enviado con éxito';
    // Reseteo de los checkbox y el color del submit button
    submitButtonElement.classList.remove('form__submitButton--activated');
    check1Element.checked = false;
    check2Element.checked = false;

    activatePreloader();
  }, 7000);
});

// Manejador del preloader
const activatePreloader = () => {
  preloaderElement.classList.toggle('window8--activated');
  console.log('cargando');
};

const inputActive = (e, num) => {
  e.target === inputNameElement[`${num}`]
    ? inputNameElement[`${num}`].classList.add('inputBorderBottom')
    : inputNameElement[`${num}`].classList.remove('inputBorderBottom');
  // e.target === inputNameElement[`${num}`] ? inputNameElement[`${num}`].classList.add('inputBorderBottom') : inputNameElement[`${num}`].classList.remove('inputBorderBottom');
};

document.addEventListener('click', (e) => {
  console.log(e);
  inputActive(e, 0);
  inputActive(e, 1);
  inputActive(e, 2);
});

document.addEventListener('click', () => {
  if (check1Element.checked && check2Element.checked) {
    submitButtonElement.classList.add('form__submitButton--activated');
  } else {
    submitButtonElement.classList.remove('form__submitButton--activated');
  }
});
