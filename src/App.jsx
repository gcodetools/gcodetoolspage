import Index from './pages/Index'
import Generic from './pages/Generic'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'
import Header from './common/Header'
import Footer from './common/Footer'
import GcodeCloner from './product/gcode-cloner'
import VectorToGcode from './product/vector-to-gcode'
import ClaySlicer from './product/clay-slicer'
import './index.css'

import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
      <div>
      a
      <Header/>
      {/* Barra de Navegación (opcional) */}
      {/* <nav> */}
      {/*   <Link to="/">Home</Link> |{' '} */}
      {/*   <Link to="/about">About</Link> |{' '} */}
      {/*   <Link to="/contact">Contact</Link> */}
      {/* </nav> */}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/generic" element={<Generic />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/*products*/}

       <Route path="/product/clay-slicer" element={<ClaySlicer/>} />
       <Route path="/product/vector-to-gcode" element={<VectorToGcode/>} />
       <Route path="/product/gcode-cloner" element={<GcodeCloner/>} />



        <Route path="*" element={<div><h1>404 - Not Found</h1></div>} />
      </Routes>
      <Footer/>
      a
    </div>
  )
}

export default App
