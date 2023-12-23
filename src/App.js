// import logo from './logo.svg';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        {/* errors page*/}
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      
    </div>
  );
}

export default App;
