import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<div>login page</div>}/>
        <Route path='/dashboard' element={<div>dashboard page</div>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
