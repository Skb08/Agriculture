import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "./App"
import Moregallery from './components/Moregallery'
import MoreResourcesLib from "./components/MoreResourceLib"
const Routing = () => {
    return < Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<App />} />
      <Route path='/moregallery' element={<Moregallery></Moregallery>}></Route>
      <Route path='/moreresource' element={<MoreResourcesLib></MoreResourcesLib>}></Route>
    </Routes>
  </Router>
}

export default Routing
