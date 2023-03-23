import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index'
// import Navbar from './components/Navbar';
import Login from './components/Login';
import Todo from './components/Todo';
import Signup from './components/Signup'



export default function App() {

  return (
    <div className="App">
       <BrowserRouter>
       {/* <Navbar/> */}
       {/* <Login />
       <Register />
      <PetList />
      <UserPetList /> */}


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
