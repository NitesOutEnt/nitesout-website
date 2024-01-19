import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Darty from './pages/Darty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
        <Route path = "*" element = {<App/>}/>
        <Route path = "/team" element = {<Team/>}/>
        <Route path = "/events" element = {<Events/>}/>
        <Route path = "/gallery" element = {<Gallery/>}/>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = "/daytime-dager" element = {<Darty/>}/> 
    </Routes>
  </HashRouter>
);
