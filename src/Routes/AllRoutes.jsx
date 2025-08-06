import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  { DashBoard }  from "../pages/DashBoard";
import { ChatBot }  from '../pages/ChatBot';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/chat' element={<ChatBot />} />

    </Routes>
  );
};
