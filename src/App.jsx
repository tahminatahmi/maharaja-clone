import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Locations from './pages/Locations'
import PrivateDining from './pages/PrivateDining'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/private-dining" element={<PrivateDining />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App