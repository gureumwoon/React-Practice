import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Day from './pages/Day';
import { useState } from 'react';

function App() {
  let [day, setDay] = useState(['월', '화', '수', '목', '금', '토', '일'])

  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path="/" element={<Main day={day} />} />
          <Route path="/day/:id" element={<Day day={day} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
