import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Upcoming from './components/Upcoming/Upcoming';
import News from './components/News/News';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Detailes from './components/Detailes/Detailes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/home' element={< Home />} />
        <Route path='/aboutUs' element={< AboutUs />} />
        <Route path='/events' element={< Events />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/link' element={<>
          <Detailes/>
        </>} />
        <Route path='/upcoming' element={< Upcoming />} />
        <Route path='/news' element={< News />} />
        <Route path='/courses' element={< Courses />} />


        <Route path='*' element={< Error />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
