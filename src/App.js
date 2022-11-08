import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/shared/Layout"
import Inicio from "./screens/Inicio";
import Colecoes from './screens/Colecoes';
import Login from "./screens/Login";
import Favoritas from "./screens/Favoritas";
import Playlists from "./screens/Playlists";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Inicio/>}/> 
            <Route path='/colecoes' element={<Colecoes/>}/>
            <Route path="/playlists" element={<Playlists/>}/>
            <Route path="/favoritas" element={<Favoritas/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;