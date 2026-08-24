console.log("El script está conectado correctamente");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach((card) => {
  console.log(card.name);
});

// Selección de elementos del DOM
const editProfileButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const editPopupCloseButton = editPopup.querySelector(".popup__close");

// Elementos que muestran la info del perfil en la página
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Campos del formulario de edición de perfil
const editProfileForm = editPopup.querySelector(".popup__form");
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const descriptionInput = editProfileForm.querySelector(
  ".popup__input_type_description",
);

// Funciones reutilizables para abrir y cerrar modales
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// Rellena los campos del formulario con los valores actuales de la página
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

// Rellena el formulario y luego abre el modal
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

// Escuchadores de eventos
editProfileButton.addEventListener("click", handleOpenEditModal);

editPopupCloseButton.addEventListener("click", () => {
  closeModal(editPopup);
});

// Maneja el envío del formulario de edición de perfil
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Actualiza los elementos de la página con los valores del formulario
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editPopup);
}

// Escuchador de eventos para el envío del formulario
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
