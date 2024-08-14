import React, {useEffect} from 'react';
import '../index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RedirectTo} from "./RedirectTo";
import {urlParamValue} from "../utils";
import {ViewsController} from "../app/ViewsController";

export const Router = () => {

    useEffect(() => {
        const maxAge = 3 * 60 * 60;
        const urlParam = urlParamValue('token');
        document.cookie = `jwt=${urlParam}; path=/; max-age=${maxAge}`;
    },[]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RedirectTo module={'menu'}/>}/>
                <Route path='/menu' element={<ViewsController/>}/>
            </Routes>
        </BrowserRouter>
    )
}