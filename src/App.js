import React from "react";
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import Alert from './components/Alert';
// import ContactUs  from "./components/ContactUs";

// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const showAlert = (massage,type)=> {
    setAlert({
      msg: massage,
      type : type
    });
    setTimeout(() => {
            setAlert(null);
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode enable", 'success');
      document.title = "Text Utile - Light Mode";
      setInterval(() => {
         document.title = "This is Amit Text Util";
      }, 2000);
      setInterval(() => {
         document.title = "Text Util";
      }, 1500);
    }else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode enable",'success');
      document.title = "Text Utile  - Dark Mode";
    }

  };
  return (
    <>
    {/* <Router> */}
      <Navbar title=""  mode={mode} toggleMode= {toggleMode}   />
      <div className='container my-3'>
       <Alert  alert= {alert}   /> 

       {/* <Routes> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert}  headingofFrom = "Enter Text to Anazye below" mode={mode}  />} />
          <Route path="/contactus" element={<ContactUs title="Contact Us" />} /> */}
        {/* </Routes> */}
        
        <TextForm showAlert={showAlert}  headingofFrom = "Enter Text to Anazye below" mode={mode}  />
       

         
       </div> 
       {/* </Router> */}
     </>
    
  );
}

export default App;
