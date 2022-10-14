import App from './App.js';

function Main(isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen) {
    return ( 
        <main className = 'content' >
        <section className = 'profile' >
        <div className = 'profile__image-container'
        onClick = { isEditAvatarPopupOpen }>
        <img className = 'profile__image'
        src = '#'
        alt = 'Фото аватара' />
        <button 
        className = 'profile__image-overlay'
        type = 'button' > </button> 
        </div> 
        <div className = 'profile__info'>
        <h1 className = 'profile__title'> Жак - Ив Кусто </h1> 
        <button type = 'button'
        className = 'profile__edit-button'
        onClick = { isEditProfilePopupOpen }> </button> 
        <p className = 'profile__description'> Исследователь океана </p> 
        </div> 
        <button type = 'button'
        className = 'profile__add-button'
        onClick = { isAddPlacePopupOpen } > </button> 
        </section> 
        <section className = 'elements'>
        <ul className = 'element'>
        </ul> 
        </section> 
        </main>
    );
}

export default Main;