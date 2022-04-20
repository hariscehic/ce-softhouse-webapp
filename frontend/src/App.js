import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<div>Login page</div>}/>
        <Route path='dashboard' element={<div>dashboard page</div>}/>
        <Route path='/' element={<div>landing page</div>}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
