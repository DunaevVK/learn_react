import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router/router";
import {LoginContext} from "../context";
import Loader from "../UI/loader/Loader";

const AppRouter = () => {
    const {isLogin,isLoading} = useContext(LoginContext)
    if(isLoading){
        return <Loader/>
    }
    return (
        isLogin
            ?   <Routes>
                    {privateRoutes.map((route, index) =>
                        <Route path={route.path} element={route.element} key={index}/>
                    )}
                    <Route
                        path="*"
                        element={<Navigate to="/posts" replace />}
                    />
                </Routes>
            :   <Routes>
                    {publicRoutes.map((route, index) =>
                        <Route path={route.path} element={route.element} key={index}/>
                     )}
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>

    )
}

export default AppRouter;