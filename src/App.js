import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';
import Layout from './layouts/Layout';
function App() {
  const navigate=useNavigate();
  const handleClick=(e)=>{
    e.preventDefault();
    let path='/home';
    navigate(path)
  }
  return (
    <div className="App">   
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/other' exact element={<Navbar/>}/>
        </Route>
       </Routes>      
    </div>
  );
}

export default App;
