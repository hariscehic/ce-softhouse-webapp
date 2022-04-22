import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<LandingPage/>}/>
        <Route path='dashboard' element={<div>dashboard page</div>}/>
        <Route path='/' element={<div>landing page</div>}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
