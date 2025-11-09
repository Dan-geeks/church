import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pastors from './pages/Pastors';
import ChurchElders from './pages/ChurchElders';
import Services from './pages/Services';
import Sermons from './pages/Sermons';
import Choir from './pages/Choir';
import PraiseWorship from './pages/PraiseWorship';
import Departments from './pages/Departments';
import PrayerGroups from './pages/PrayerGroups';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pastors" element={<Pastors />} />
            <Route path="/church-elders" element={<ChurchElders />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/choir" element={<Choir />} />
            <Route path="/praise-worship" element={<PraiseWorship />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/prayer-groups" element={<PrayerGroups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;