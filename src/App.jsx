import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/MyFooter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Reviews from './components/Reviews'
import Members from './components/Members'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Companies from './components/Companies'
import ResourcesLib from './components/ResourcesLib'
import FAQ from './components/FAQ'
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (section) {
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -100,
        });
      }, 100); // Delay to ensure the DOM is fully rendered
    } else {
      scroll.scrollToTop({
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="companies"><Companies /></section>
      <section id="service"><Services /></section>
      <section id="about"><About /></section>
      <section id="blog"><Blog /></section>
      <Reviews />
      <section id="member"><Members /></section>
      
      <section id="resourcelib"><ResourcesLib/></section>

      <Gallery />
      <section id="faq"><FAQ /></section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
