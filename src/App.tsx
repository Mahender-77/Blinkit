
import { Route, Routes } from "react-router-dom"
import { UI } from "./components/Layout/UI"
// import { Header } from "./components/Header"
import { Body } from "./components/Body"
function App() {
  

  return (
  <Routes>
    <Route  element={<UI/>} >
    <Route path="/" element={<Body/>}/>
    </Route>
  </Routes>
  )
}

export default App
