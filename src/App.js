// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Read from './Components/Read';

function App() {
  return (
    <div className="Container">
 <Routes>
  <Route path='/' element={<Read/>}></Route>
  <Route path='/create' element={<Create/>}></Route>
  <Route path='/edit' element={<Edit/>}></Route>
 </Routes>
    </div>
  );
}

export default App;
