import React, {useEffect, useMemo, useRef, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./UI/navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import {LoginContext} from "./context";

function App() {
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        if(localStorage.getItem('login')) {
            setIsLogin(true)
        }
        setIsLoading(false)
    })
    return (
        <LoginContext.Provider value={{
            isLogin,
            setIsLogin,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>

            </BrowserRouter>
        </LoginContext.Provider>



    )
}
export default App;
