export function Register() {

    const handleSubmit = (e) => {
        e.preventDefault()
        // onSubmit(values)
    }

    return (
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <input className="register__inputs register__inputs_field_email" placeholder="Email" type="email"></input>
                <input className="register__inputs register__inputs_field_password" placeholder="Пароль" type="password"></input>
                <button className="register__button">Зарегистрироваться</button>
                <p className="register__description">Уже зарегистрированы? Войти</p>
            </form>
        </div>

    )
}