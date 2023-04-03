import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
