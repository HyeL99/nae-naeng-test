import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './page/Login';

function App() {
  return (
    <div>
      <NavBar />
      <Login />
      {/*<Routes>
        <Route path='/' element={} />
  </Routes>*/}
    </div>
  );
}

export default App;
