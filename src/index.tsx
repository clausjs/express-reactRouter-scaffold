import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

import './main.scss';

import NavBar from './components/Nav/NavBar';
import Home from './components/Home/Home';
import TestPage from './components/TestPage/TestPage';

const root = document.getElementById("root");

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(root).render(
  <App />
);