import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

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
            path='/resume'
            element={ <Resume /> }
          />
          <Route
            exact
            path='/projects'
            element={ <Projects /> }
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
