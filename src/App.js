import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home' 
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MovieDetail from './Components/MoviDetails/MovieDetail';
import PageNot from './Components/PageNotfound/PageNot';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
      <Route element={<PageNot/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
