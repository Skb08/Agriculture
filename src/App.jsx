import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/MyFooter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Services from './components/Services'
import Donate from './components/Donate'
import Gallery from './components/Gallery'
import Companies from './components/Companies'


function App() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <Donate/>
      <Companies/>
      <Gallery/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
