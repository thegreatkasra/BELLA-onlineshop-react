import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home'
import Account from './components/Account/Account';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  )
}

export default App