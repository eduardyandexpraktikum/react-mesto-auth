export function Login({ onSubmit }) {

    // const { email, password } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        // onSubmit(values)
    }

    return (
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <input className="login__inputs login__inputs_field_email" placeholder="Email" type="email"></input>
                <input className="login__inputs login__inputs_field_password" placeholder="Пароль" type="password"></input>
                <button className="login__button">Войти</button>
            </form>
        </div>
    )

};