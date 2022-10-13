import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  return (
    <div classNameName='App'>
        <Header />
        <Main />
        <Footer />
        <section className='popup popup_type_profile'>
            <div className='popup__container'>
                <button className='popup__close' type='button'></button>
                <div className='popup__content'>
                    <h2 className='popup__title'>Редактировать профиль</h2>
                    <form className='popup__form popup__form_profile' name='popupForm' novalidate>
                        <input id='username-input' type='text' name='name' placeholder='Имя' className='popup__input popup__input_type_username' minlength='2' maxlength='40' required>
                        <span className='popup__input-error username-input-error'></span>
                        <input id='text-input' type='text' name='about' placeholder='О себе' className='popup__input popup__input_type_job' minlength='2' maxlength='200' required>
                        <span className='popup__input-error text-input-error'></span>
                        <button type='submit' className='popup__button'>Сохранить</button>
                    </form>
                </div>
            </div>
        </section>

        <section className='popup popup_type_avatar'>
            <div className='popup__container'>
                <button className='popup__close' type='button'></button>
                <div className='popup__content'>
                    <h2 className='popup__title'>Обновить аватар</h2>
                    <form className='popup__form popup__form_avatar' name='popupForm' novalidate>
                        <input id='avatar-input' type='url' placeholder='Ссылка на картинку' name='avatar' className='popup__input popup__input_type_avatar' required>
                        <span className='popup__input-error avatar-input-error'></span>
                        <button type='submit' className='popup__button'>Сохранить</button>
                    </form>
                </div>
            </div>
        </section>

        <section className='popup popup_image_zoom'>
            <div className='popup__box'>
                <button className='popup__close' type='button'></button>
                <img className='popup__image' src='#' alt='Картинка'/>
                <h2 className='popup__caption'></h2>
            </div>
        </section>

        <section className='popup popup_add_element'>
            <div className='popup__container'>
                <button className='popup__close' type='button'></button>
                <div className='popup__content'>
                    <h2 className='popup__title'>Новое место</h2>
                    <form className='popup__form popup__form_add' name='popupForm' novalidate>
                        <input id='name-input' type='text' placeholder='Название' name='name' className='popup__input popup__input_type_title' minlength='2' maxlength='30' required>
                        <span className='popup__input-error name-input-error'></span>
                        <input id='url-input' type='url' placeholder='Ссылка на картинку' name='link' className='popup__input popup__input_type_link' required>
                        <span className='popup__input-error url-input-error'></span>
                        <button type='submit' className='popup__button'>Создать</button>
                    </form>
                </div>
            </div>
        </section>

        <section className='popup popup_delete_card'>
            <div className='popup__container'>
                <button className='popup__close' type='button'></button>
                <div className='popup__content'>
                    <h2 className='popup__title'>Вы уверены?</h2>
                    <form className='popup__form'>
                        <button type='submit' className='popup__button'>Да</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
