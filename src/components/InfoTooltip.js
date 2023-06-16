export function InfoTooltip({ isOpen, onClose, access }) {

    return (
        <div className="popup popup_opened">
            <div className="popup__container">
                <div className="popup__tooltip_pic" />
                <p className="popup__tooltip_description">Вы успешно зарегистрировались!</p>
                <button className="popup__close" />
            </div>
        </div>
    )
}