import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import BasketPage from './pages/basketball';
import SoccerPage from './pages/soccer';
import Contatos from './pages/contato';



const MainRoutes = () => {
    return (
        <Router>
        <Navbar/>
            <Routes>
                <Route path='/' exact element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/basketball' element={<BasketPage/>} />
                <Route path='/soccer' element={<SoccerPage/>} />
                <Route path='/contato' element={<Contatos/>} />
            </Routes>
        </Router>
    );
}

export default MainRoutes;