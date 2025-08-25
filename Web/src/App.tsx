import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Layout from './components/layout/Layout';


function App () {
  const [ openProfile, setOpenProfile ] = useState( false )

  return (
    <Router>
      <div className="App" onClick={() => { if (openProfile) { setOpenProfile(false) } }}>
        <Routes>
          <Route path="/" element={ <Layout openProfile={openProfile} setOpenProfile={setOpenProfile}  /> }>
            <Route index element={ <Home /> } />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;