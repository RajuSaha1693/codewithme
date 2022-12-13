
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Main from './components/Main';
import Layout from './layouts/Layout';
import ReactQuery from './components/reactquery/ReactQuery';
import TanStack from './components/reactquery/TanStack';
function App() {
  return (
    <div className="App">   
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/other' exact element={<Navbar/>}/>
        <Route path='/posts' exact element={<ReactQuery/>}/>
        <Route path='/tan-stack' exact element={<TanStack/>}/>
        </Route>
       </Routes>      
    </div>
  );
}

export default App;
