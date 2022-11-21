import React from 'react';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Header from './components/Header/Header';
import All from './components/All/All';
import Footer from './components/Footer/Footer';
import Mycv from './components/Mycv/Mycv';






function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route  exact path='/' element={<All/>}/>
      <Route path='/mycv' element={<Mycv/>}/>
      </Routes>
      <Footer/>
 
    </Router>
  );
}

export default App;
