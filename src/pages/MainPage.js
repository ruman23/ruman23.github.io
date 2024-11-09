import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

function MainPage() {
  return (
    <div>
      <Header />        {/* Navigation bar */}
      <div className="container">  {/* Bootstrap container to center content */}
        <div className="row">
          <div className="col-12">
            <Home />          {/* Home section */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <About />         {/* About section */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Skills />        {/* Skills section */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Experience />    {/* Experience section */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Portfolio />     {/* Portfolio section */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Contact />       {/* Contact section */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
