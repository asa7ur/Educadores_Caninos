import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './components'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
