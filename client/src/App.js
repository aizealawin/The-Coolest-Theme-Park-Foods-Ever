import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import MenuForm from './components/MenuForm'

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/newfood" element={<MenuForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
