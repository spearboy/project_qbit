import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App