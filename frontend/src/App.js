import Login from './Pages/Login'
import Home from './Pages/Home'
import HomeWorker from './Pages/HomeWorker'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function App() {
  
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Admin" element={<Home/>}/>
        <Route exact path="/Worker" element={<HomeWorker/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
