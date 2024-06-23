import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';
import About from './pages/About';
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/SignIn' element={<SignIn />} />
    <Route path='/SignOut' element={<SignOut />} />
    <Route path='/Profile' element={<Profile />} />
    <Route path='/About' element={<About />} />

   </Routes>
   
   </BrowserRouter>
  )
}
