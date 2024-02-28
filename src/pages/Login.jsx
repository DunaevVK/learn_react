import React, {useContext, useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {LoginContext} from "../context";

const Login = () => {
    const {isLogin, setIsLogin} = useContext(LoginContext)
    const login = (e) => {
        e.preventDefault()
        setIsLogin(true)
        localStorage.setItem('login', 'true')
    }
    return (
        <div>
            <h1>Страница для Логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;