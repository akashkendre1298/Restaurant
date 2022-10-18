import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Burger from '../Containers/Burger/Burger'
import Home from '../Containers/Home/Home'
import BlogPage from './../Containers/BlogPage/BlogPage';
import BreadPage from './../Containers/BreadPage/BreadPage';
import PizzaPage from './../Containers/PizzaPage/PizzaPage';

const AppRoutes = (prpos) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/burger" element={<Burger />} />
                <Route path="/pizza" element={<PizzaPage />} />
                <Route path="/bread" element={<BreadPage />} />
                <Route path="/blogs" element={<BlogPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes