import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [userTitle, setUserTitle] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userImage, setUserImage] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserProfile()])
      .then(([initialCards, userData]) => {
        setUserTitle(userData.name);
        setUserDescription(userData.about);
        setUserImage(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container" onClick={onEditAvatar}>
          <img className="profile__image" src={userImage} alt="Фото аватара"/>
          <button className="profile__image-overlay" type="button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userTitle}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return <Card key={card._id} onCardClick={onCardClick} card={card}/>;
        })}
      </section>
    </main>
  );
}

export default Main;
