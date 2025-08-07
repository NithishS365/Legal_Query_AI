import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  { DashBoard }  from "../pages/DashBoard";
import { ChatBot }  from '../pages/ChatBot';
import  Fir  from "../pages/Fir"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/chat' element={<ChatBot />} />
      <Route path='/fir' element={<Fir />} />

    </Routes>
  );
};
