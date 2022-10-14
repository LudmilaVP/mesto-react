function ImagePopup() {
    return ( 
        <section className = 'popup popup_image_zoom' >
        <div className = 'popup__box' >
        <button 
        className = 'popup__close'
        type = 'button' > </button>  
        <img className = 'popup__image'
        src = '#'
        alt = 'Картинка' />
        <h2 className = 'popup__caption' > </h2>  
        </div>  
        </section>
    )
}