import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  { DashBoard }  from "../pages/DashBoard";
import { ChatBot }  from '../pages/ChatBot';
import { DocumentAnalyse } from '../pages/DocumentAnalyse';
import  Fir  from "../pages/Fir"
import Lawyer from '../pages/Lawyer';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/chat' element={<ChatBot />} />
      <Route path='/fir' element={<Fir />} />
      <Route path='/document-analyse' element={<DocumentAnalyse />} />
      <Route path='/hire-lawyer' element={<Lawyer />} />
      {/* Add more routes as needed */}

    </Routes>
  );
};
