// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { Routes ,Route } from 'react-router-dom';
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [pMode, setPMode] = useState('light')

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1800);
  }

  
  let toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.color = 'white'
      document.body.style.backgroundColor = '#232323'
      document.title = 'TextUtils - Dark Mode'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
      showAlert("Light mode has been enabled", "success")
    }
  }

  let purpleMode = ()=>{
    if(pMode === 'light'){
      setPMode('purple')
      document.body.style.color = 'black'
      document.body.style.backgroundColor = '#c8a2c8'
      // document.body.Navbar = '#5f436d'
      // document.body.textarea.style.borderWidth = '4px'
      document.title = 'TextUtils - Purple Mode'
      showAlert("Purple mode has been enabled", "success")
    }
    else{
      setPMode('light')
      document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} pMode={pMode} purpleMode={purpleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} pMode={pMode}/>
        {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} pMode={pMode}/>} />
        </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
