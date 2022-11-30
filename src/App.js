import { useEffect, useState } from "react";
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Header from './components/Header/Header';
import All from './components/All/All';
import Footer from './components/Footer/Footer';
import Mycv from './components/Mycv/Mycv';
import Load from "./Load";

function App() {
  const [loading , setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },1000)

  },[])
  return (
  <>
  {
  loading ? <Load  loading={loading}/>:
  (
    <Router basename={'/my-portfolio'}>
      <Header/>
      <Routes>
      <Route path='/' element={<All/>}/>
      <Route path='/mycv' element={<Mycv/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
  }
    
    </>
  );
}

export default App;
