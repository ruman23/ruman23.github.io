import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function MainPage() {
  return (
    <div className="main-page">
      <Header />

      <div className="container">
        <div className="row"><div className="col-12"><Home /></div></div>
        <div className="row"><div className="col-12"><About /></div></div>
        <div className="row"><div className="col-12"><Education /></div></div>
        <div className="row"><div className="col-12"><Experience /></div></div>
        <div className="row"><div className="col-12"><Portfolio /></div></div>
        <div className="row"><div className="col-12"><Skills /></div></div>
        <div className="row"><div className="col-12"><Projects /></div></div>

        {/* Footer INSIDE container to match section width */}
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;