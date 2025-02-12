
import { Route, Routes } from "react-router-dom"
import { UI } from "./components/Layout/UI"
import  {SubUi}  from "./components/Layout/SubUi"
// import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { BannerCont } from "./components/BannerCont"

function App() {
  

  return (
  <Routes>
    <Route  element={<UI/>} >
    <Route path="/" element={<Body/>}/>
    <Route element={<SubUi/>}>
       <Route path='/bannerCont' element={<BannerCont/>}/>
    </Route>
    </Route>
  </Routes>
  )
}

export default App
