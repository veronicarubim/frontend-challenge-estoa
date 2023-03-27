import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from '../pages/DetailPage/DetailPage'
import HomePage from '../pages/HomePage/HomePage'

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element={ <HomePage/>} path="/"/>
              <Route path="/detalhes/:name" element={<DetailPage/>}/>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router