import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import MenuForm from './components/MenuForm'
import FoodDetails from './pages/FoodDetails'

function App() {
  return (
    <div className="App">
      <header className="nav">
        <Nav />
      </header>
      <main className="main">
        <Routes>
          <Route path="/newfood" element={<MenuForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/food/:foodId" element={<FoodDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
