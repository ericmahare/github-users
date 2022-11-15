import React from 'react';
import { Dashboard, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
