// const { root } = require("postcss");

// const { root } = require('postcss');

// CONSTS LIST
const onTopButtonElement = document.getElementById('onTop');
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
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');
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
  setTimeout(() => {
    rootStyles.setProperty('--display-webtitle', 'none');
  }, 1000);
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
  rootStyles.setProperty('--display-webtitle', 'block');
};

closeMenuElement.addEventListener('click', desactivateDropdown);

// Función para activar el onTopButton

const activateOnTopButton = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    rootStyles.setProperty('--display-onTopButton', 'block');
  } else {
    rootStyles.setProperty('--display-onTopButton', 'none');
  }
};

window.addEventListener('scroll', activateOnTopButton);

// Función para scrollear al top de la página con el onTopButton

const moveOnTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

onTopButtonElement.addEventListener('click', moveOnTop);

// Función reutilizable para activar/desactivar el cuerpo y encabezado del servicio

class ServiceHandler {
  constructor(headerElement, bodyElement, nameElement, plusElement) {
    this.headerElement = headerElement;
    this.bodyElement = bodyElement;
    this.nameElement = nameElement;
    this.plusElement = plusElement;
    this.isOpen = false; // Mantener el estado del servicio abierto/cerrado

    this.initialize();
  }

  initialize() {
    this.headerElement.addEventListener('click', () => {
      if (this.isOpen) {
        this.closeService(); // Si está abierto, cerrar este servicio
      } else {
        this.closeAllServicesExceptCurrent(); // Cerrar todos los demás servicios abiertos
        this.openService(); // Abrir este servicio
      }
    });
  }

  openService() {
    this.isOpen = true;
    this.headerElement.classList.add('allServices__header--active');
    this.nameElement.classList.add('allServices__name--active');
    this.bodyElement.classList.add('allServices__body--animation');
    this.togglePlusIcon();
    console.log('Servicio abierto');
  }

  closeService() {
    this.isOpen = false;
    this.headerElement.classList.remove('allServices__header--active');
    this.nameElement.classList.remove('allServices__name--active');
    this.bodyElement.classList.remove('allServices__body--animation');
    this.togglePlusIcon();
    console.log('Servicio cerrado');
  }

  closeAllServicesExceptCurrent() {
    // Cerrar todos los servicios abiertos excepto el actual
    services.forEach((service) => {
      if (service !== this && service.isOpen) {
        service.closeService();
      }
    });
  }

  togglePlusIcon() {
    if (this.isOpen) {
      this.plusElement.src = 'assets/icons/minus-solid.svg';
    } else {
      this.plusElement.src = 'assets/icons/plus-solidWhite.svg';
    }
  }
}

// Crear instancias para cada servicio
const services = [];

for (let i = 1; i <= 5; i++) {
  const headerElement = document.getElementById(`allServices__header${i}`);
  const bodyElement = document.getElementById(`allServicesbody${i}`);
  const nameElement = document.getElementById(`allServices__name${i}`);
  const plusElement = document.getElementById(`plus-solid-${i}`);

  const service = new ServiceHandler(headerElement, bodyElement, nameElement, plusElement);
  services.push(service);
}




// Manejador del preloader
const activatePreloader = () => {
  preloaderElement.classList.toggle('window8--activated');
  console.log('cargando');
};

const inputActive = (e, num) => {
  e.target === inputNameElement[`${num}`]
    ? inputNameElement[`${num}`].classList.add('inputBorderBottom')
    : inputNameElement[`${num}`].classList.remove('inputBorderBottom');

};

document.addEventListener('click', (e) => {
  inputActive(e, 0);
  inputActive(e, 1);
  inputActive(e, 2);
});

document.addEventListener('input', () => {
  if (
    !check1Element.checked ||
    !check2Element.checked ||
    !nameElement.value ||
    !emailElement.value ||
    !messageElement.value
  ) {
    submitButtonElement.classList.remove('form__submitButton--activated');
  } else {
    submitButtonElement.classList.add('form__submitButton--activated');
  }
});

document.addEventListener('input', () => {
  if (check1Element.checked && check2Element.checked2) {
    submitButtonElement.removeAttribute('disabled');
  }
});

// Manejador del boton submit del formulario

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  // Se comprueba si están los checkbox marcados

  if (
    !nameElement.value ||
    !emailElement.value ||
    !messageElement.value ||
    !check1Element.checked ||
    !check2Element.checked
  ) {
    submitButtonElement.setAttribute('disabled');
  } else {
    submitButtonElement.removeAttribute('disabled');
  }
  // Desvanecimiento del contenedor formulario
  formContainer.classList.add('form__container--desactivated');
  // Activación del preloader durante 1000ms
  setTimeout(activatePreloader, 1000);
  // Termina el preloader y aparece el mensaje
  setTimeout(() => {
    formContainer.classList.remove('form__container--desactivated');
    successMsgElement.textContent = 'Mensaje enviado con éxito';
    // Reseteo de los checkbox y el color del submit button
    submitButtonElement.classList.remove('form__submitButton--activated');
    nameElement.value = '';
    emailElement.value = '';
    messageElement.value = '';
    check1Element.checked = false;
    check2Element.checked = false;

    activatePreloader();
  }, 7000);
});


class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    console.log(`Nombre: ${this.titular} Saldo: ${this.saldo}`);
  }

}
const cuenta1 = new CuentaBancaria(`Juan`, 2000);
cuenta1.mostrarInformacion();
const cuenta2 = new CuentaBancaria(`Juan`, 2000);
cuenta2.mostrarInformacion();

class Book {
  constructor(titulo, autor, paginas) {

    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  inf() {
    console.log(`Titulo del libro: ${this.titulo}, Autor: ${this.autor}, Paginas: ${this.paginas}`);

  }
};

const book1 = new Book('The kill', 'Marcos', 3000);
book1.inf();
const book2 = new Book('Soap', 'James', 300);
book2.inf();