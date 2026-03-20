import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/Header';
import Reviews from "./Reviews/Reviews";
import AboutMe from "./AboutMe/AboutMe";
import AboutUs from "./Abouts/AboutUs";

import './App.css';

function App(): React.JSX.Element {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;