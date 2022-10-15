import Card from './Card.js';
import React from 'react';
import api from '../utils/api.js';

function Main(isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen) {
    const [userTitle, setUserTitle] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userImage, setUserImage] = React.useState('');
    const [cards, setCards] = React.useState([]);

React.useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
    setUserTitle(initialCards.name);
  setUserDescription(initialCards.about);
  setUserImage(initialCards.avatar);
  setCards(userData);
})
.catch((err) => console.log(err)); 
}, []);
    return ( 
        <main className = 'content' >
        <section className = 'profile' >
        <div className = 'profile__image-container'
        onClick = { isEditAvatarPopupOpen }>
        <img className = 'profile__image'
        src = {userImage}
        alt = 'Фото аватара' />
        <button 
        className = 'profile__image-overlay'
        type = 'button' > </button> 
        </div> 
        <div className = 'profile__info'>
        <h1 className = 'profile__title'>{userTitle}</h1> 
        <button type = 'button'
        className = 'profile__edit-button'
        onClick = { isEditProfilePopupOpen }> </button> 
        <p className = 'profile__description'>{userDescription}</p> 
        </div> 
        <button type = 'button'
        className = 'profile__add-button'
        onClick = { isAddPlacePopupOpen } > </button> 
        </section> 
        <section className = 'elements'>
        {cards.map((card) => {
            return (
              <Card
                key={card._id}
                onCardClick={onClickCard}
                card={card}
              />
            );
          })}
        </section> 
        </main>
    );
}

export default Main;