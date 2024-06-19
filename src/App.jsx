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

function App() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <Companies/>
      <Services/>
      <About/>
      <Blog/>
      <Reviews/>
      <Members/>
      <ResourcesLib/>
      <Gallery/>
      <FAQ/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
