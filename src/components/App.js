import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
    }
    return ( 
        <body className = 'page'>
        <Header />
        <Main 
        isEditAvatarPopupOpen = { handleEditAvatarClick }
        isEditProfilePopupOpen = { handleEditProfileClick }
        isAddPlacePopupOpen = { handleAddPlaceClick }
        />
        <Footer />
        <PopupWithForm 
        name = 'profile'
        title = 'Редактировать профиль'
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
        buttonName = 'Сохранить' />

        <PopupWithForm 
        name = 'element'
        title = 'Новое место'
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
        buttonName = 'Создать' />

        <PopupWithForm
        name = 'avatar'
        title = 'Обновить аватар'
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
        buttonName = 'Сохранить' />

        <ImagePopup />

        </body>
    );
}

export default App;