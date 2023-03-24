import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index'
import Login from './components/Login';
import Todo from './components/Todo';
import Signup from './components/Signup'



export default function App() {

  return (
    <div className="App">
       <BrowserRouter>
  

{/* added routes */}
      <Routes>
        <Route path="/" element={< Signup />} /> 
        <Route path="/todo" element={<Todo />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
