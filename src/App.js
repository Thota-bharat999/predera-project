import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import LoginForm from './LoginForm'
import './App.css'

const App = () => (
  <div className="app-container">
    <Routes>
      <Route exact path="/login" element={<LoginForm/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      
    
    </Routes>
  </div>
)

export default App
