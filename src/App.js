import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
//import Login from './page/Login';
import ApiLogin from './page/ApiLogin';
import { useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  return (
    <div>
      <NavBar />
      {<Routes>
        <Route path='/' element={<ApiLogin setAuthenticate={setAuthenticate}/>} />
      </Routes>}
    </div>
  );
}

export default App;
