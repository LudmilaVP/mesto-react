import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(undefined);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
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
        <body className = 'page'>
        
        <Header />

        <Main 
        isEditAvatarPopupOpen = { handleEditAvatarClick }
        isEditProfilePopupOpen = { handleEditProfileClick }
        isAddPlacePopupOpen = { handleAddPlaceClick }
        onClickCard={handleClickCard}
        />

        <Footer />

        <PopupWithForm 
        name = 'profile'
        title = 'Редактировать профиль'
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
        buttonName = 'Сохранить'>
            <div class="popup__form popup__form_profile" name="popupForm" novalidate>
                        <input id="username-input" type="text" name="name" placeholder="Имя" className="popup__input popup__input_type_username" minlength="2" maxlength="40" required/>
                        <span class="popup__input-error username-input-error"></span>
                        <input id="text-input" type="text" name="about" placeholder="О себе" className="popup__input popup__input_type_job" minlength="2" maxlength="200" required/>
                        <span class="popup__input-error text-input-error"></span>
                    </div>
        </PopupWithForm>

        <PopupWithForm 
        name = 'element'
        title = 'Новое место'
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
        buttonName = 'Создать'>
            <div class="popup__form popup__form_add" name="popupForm" novalidate>
                        <input id="name-input" type="text" placeholder="Название" name="name" className="popup__input popup__input_type_title" minlength="2" maxlength="30" required/>
                        <span class="popup__input-error name-input-error"></span>
                        <input id="url-input" type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_type_link" required/>
                        <span class="popup__input-error url-input-error"></span>
                    </div>
        </PopupWithForm>

        <PopupWithForm
        name = 'avatar'
        title = 'Обновить аватар'
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
        buttonName = 'Сохранить'>
            <div class="popup__form popup__form_avatar" name="popupForm" novalidate>
                        <input id="avatar-input" type="url" placeholder="Ссылка на картинку" name="avatar" className="popup__input popup__input_type_avatar" required/>
                        <span class="popup__input-error avatar-input-error"></span>
                    </div>
        </PopupWithForm>

        <PopupWithForm
          name='delete'
          title='Вы уверены?'
          onClose={closeAllPopups}
          buttonTitle='Да'
        >
        </PopupWithForm>
        
        <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}/>

        </body>
    );
}

export default App;