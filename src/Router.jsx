import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "./App"
import Moregallery from './components/Moregallery'
import MoreResourcesLib from "./components/MoreResourceLib"
 import MoreAgroEquip from './components/MoreAgroEquip'
  import { MoreNewsBlog } from './components/MoreNewsBlog'
  import MoreServices from './components/MoreServices'
const Routing = () => {
    return < Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<App />} />
      <Route path='/moregallery' element={<Moregallery></Moregallery>}></Route>
      <Route path='/moreresource' element={<MoreResourcesLib></MoreResourcesLib>}></Route>
      <Route path='/moreagroequip' element={<MoreAgroEquip></MoreAgroEquip>}></Route>
      <Route path='/morenewsblog' element={<MoreNewsBlog></MoreNewsBlog>}></Route>
      <Route path='/moreservice' element={<MoreServices></MoreServices>}></Route>



    </Routes>
  </Router>
}

export default Routing
