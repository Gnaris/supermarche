import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Statistique from './pages/Statistique'
import Header from './layout/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/statistique' element={<Statistique/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
    </BrowserRouter>
  )
}
