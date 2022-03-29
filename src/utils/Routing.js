// React Import
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page Import
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../components/Projects';
import Blog from '../pages/Blog';
import Resume from '../pages/Resume';

export default function Routing() {
    return (
        <Routes>
            <Route
            path="/"
            element={<Home />}
            />
            <Route
            path="/about"
            element={<About />}
            />
            <Route
            path="/contact"
            element={<Contact />}
            />
            <Route
            path="/projects"
            element={<Projects />}
            />
            <Route
            path="/blog"
            element={<Blog />}
            />
            <Route
            path="/resume"
            element={<Resume />}
            />
        </Routes>
    )
}