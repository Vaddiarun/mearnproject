import { BrowserRouter,Route,Routes} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Profile  from './pages/Profile';
import Signup from './pages/Signup';
import Sigin from './pages/Sigin';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About />}/>

      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Sigin" element={<Sigin/>}/>
      <Route path="/Signup" element={<Signup/>}/>

    </Routes>

  


    </BrowserRouter>
  )
}