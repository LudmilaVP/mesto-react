import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AddPlacePopup from './AddPlacePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 
function handleCardDelete(card) {}

React.useEffect(() => { 
  function handleEscClose(e) {
    e.key === 'Escape' && closeAllPopups();
    }
    function handleOverlayClose (e) {
      e.target.classList.contains('popup_opened') && closeAllPopups();
      }
      window.addEventListener('keydown', handleEscClose);
      window.addEventListener('click', handleOverlayClose);
    
      return () => {
        window.removeEventListener('click', handleOverlayClose);
        window.removeEventListener('keydown', handleEscClose);
    
      };
    }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleClickCard(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(undefined);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleClickCard}
      />

      <Footer />
      <EditProfilePopup/>
      <AddPlacePopup />
      <EditAvatarPopup />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить"
      >
        <div className="popup__form popup__form_profile" noValidate>
          <input
            id="username-input"
            type="text"
            name="name"
            placeholder="Имя"
            className="popup__input popup__input_type_username"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error username-input-error"></span>
          <input
            id="text-input"
            type="text"
            name="about"
            placeholder="О себе"
            className="popup__input popup__input_type_job"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error text-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="element"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonName="Создать"
      >
        <div className="popup__form popup__form_add" noValidate>
          <input
            id="name-input"
            type="text"
            placeholder="Название"
            name="name"
            className="popup__input popup__input_type_title"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            id="url-input"
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            className="popup__input popup__input_type_link"
            required
          />
          <span className="popup__input-error url-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonName="Сохранить"
      >
        <div className="popup__form popup__form_avatar" noValidate>
          <input
            id="avatar-input"
            type="url"
            placeholder="Ссылка на картинку"
            name="avatar"
            className="popup__input popup__input_type_avatar"
            required
          />
          <span className="popup__input-error avatar-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        onClose={closeAllPopups}
        buttonName="Да"
      ></PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
