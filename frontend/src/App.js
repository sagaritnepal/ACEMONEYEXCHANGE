import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import RatesTable from './components/RatesTable';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <Hero />
      <RatesTable />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
