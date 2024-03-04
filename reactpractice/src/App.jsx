import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
