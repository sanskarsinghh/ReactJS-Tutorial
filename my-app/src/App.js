// import logo from './logo.svg';
import About from './About';
import './App.css';
import Navbar from './Navbar';
// import Textform from './Textform';
import React, {useState} from 'react';





function App() {
  const [mode, setmode] = useState('dark');
  return (
    <>

      <Navbar title="Text-utils" mode = {mode}/>
      <div className="container my-3">
      {/* <Textform  heading="Enter the text to analyze "/> */}
      <About/>
      </div>


    </>


  );
}

export default App;
