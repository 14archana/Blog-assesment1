import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BlogForm from './Pages/BlogForm';
import Nav1 from './Units/Nav1';

export default function App() {
  return (
    <div>
      <h1 className = "text-center"></h1>
      <Nav1></Nav1>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BlogForm" element={<BlogForm/>} />
       </Routes>
</div>
  )
}
