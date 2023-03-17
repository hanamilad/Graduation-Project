import './App.css';
import Loginbage from './component/login/Loginbage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Rej from './component/login/Rej';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Rej/>} path='/rej'></Route>
      <Route element={<Loginbage/>} path='/'></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
