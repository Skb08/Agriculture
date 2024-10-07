import './App.css';
import AgroEquip from './components/AgroEquip';
import Footer from './components/MyFooter';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Members from './components/Members';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Companies from './components/Companies';
import ResourcesLib from './components/ResourcesLib';
import FAQ from './components/FAQ';
import NewsBlog from './components/NewsBlog';
import AgricultureUpdates from './components/AgricultureUpdates';
import { useLayoutEffect } from 'react';
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
      }, 300); // Slight delay to ensure DOM has loaded
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
      <section id="service"><Services /></section>
      <section id="agroequip"><AgroEquip /></section>
      <section id="reviews"><Reviews /></section>
      <section id="newsblog"><NewsBlog /></section>
      <section id="member"><Members /></section>
      <section id="resourcelib"><ResourcesLib /></section>
      <section id="gallery"><Gallery /></section>
      <section id="companies"><Companies /></section>
      <section id="agroupdate"><AgricultureUpdates /></section>
      <section id="faq"><FAQ /></section>
      <Footer />
    </>
  );
}

export default App;
