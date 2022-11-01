import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import FoodDetails from './pages/FoodDetails'
function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
