import { useEffect, useState } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import AboutMe from './AboutMe/AboutMe';
import AboutUs from './Abouts/AboutUs';
import Contact from './AboutMe/Contact';
import Hobbies from './AboutMe/Hobbies';
import MyStory from './AboutMe/MyStory';
import SiteHistory from './Abouts/SiteHistory';
import SiteMission from './Abouts/SiteMission';
import Review from './Review/Review';
import PageNotFound from './PageNotFound/PageNotFound';
import type {ReviewData} from './ReviewInterface.ts';

import './App.css';

function App(): React.JSX.Element {
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    fetch('https://emoji-critic.es.tripleten-services.com/v1/reviews')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la petición de red');
        }
        return res.json();
      })
      .then((data: ReviewData[]) => {
        setReviews(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/reviews' element={<Reviews reviews={reviews} />} />
        <Route
          path='/reviews/:reviewId'
          element={<Review reviews={reviews} />}
        />
        <Route path='/about-me' element={<AboutMe />}>
          <Route path='contact' element={<Contact />} />
          <Route path='hobbies' element={<Hobbies />} />
          <Route path='my-story' element={<MyStory />} />
        </Route>
        <Route path='/about-us' element={<AboutUs />}>
          <Route path='site-history' element={<SiteHistory />} />
          <Route path='site-mission' element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;