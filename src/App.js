import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={ <Home /> }
          />
          <Route
            exact
            path='/contact'
            element={ <Contact /> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
