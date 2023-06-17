import { useState } from "react";
import { login } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';


export function Login({ onSubmit, handleLogin }) {

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        login(formValue)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    handleLogin(data);
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    return (
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <input className="login__inputs login__inputs_field_email" value={formValue.email} placeholder="Email" name="email" onChange={handleChange} type="email"></input>
                <input className="login__inputs login__inputs_field_password" value={formValue.password} placeholder="Пароль" name="password" onChange={handleChange} type="password"></input>
                <button className="login__button">Войти</button>
            </form>
        </div>
    )

};