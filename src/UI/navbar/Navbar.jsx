import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LoginContext} from "../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isLogin, setIsLogin} = useContext(LoginContext)
    const logout = () => {
        setIsLogin(false)
        localStorage.removeItem('login')
    }
    return (
        <div className={'navbar'}>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;