import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BlogForm from './Pages/BlogForm';
import Nav1 from './Units/Nav1';

export default function App() {
  return (
    <div>
      <Nav1 />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BlogForm" element={<BlogForm/>} />
       </Routes>
</div>
  )
}
