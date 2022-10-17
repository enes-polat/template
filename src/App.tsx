import React from 'react';
import './App.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import Stories from './Pages/Stories';
import PopularTours from './Pages/PopularTours';

function App() {
  return (
    <div className="container">
      <Header />
      <Contact />
      <PopularTours />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
