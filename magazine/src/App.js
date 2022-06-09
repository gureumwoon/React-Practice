import './App.css';
import { Routes, Route } from 'react-router-dom';
import { auth } from './shared/firebase';
import Main from './routes/Main';
import Join from './routes/Join';
import Login from './routes/Login';
import Upload from './routes/Upload';
import Detail from './routes/Detail';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { loadpostFB } from './redux/modules/post';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginCheck = async (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, loginCheck)
    dispatch(loadpostFB())
  }, [])

  // console.log(auth.currentUser);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
