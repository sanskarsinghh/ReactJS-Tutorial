// import logo from './logo.svg';
// import About from './About';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
import { useState } from 'react';





function App() {
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

  }
  return (
    <>

      <Navbar title="Text-utils" />
        <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze " />
        {/* <About/> */}
      </div>


    </>


  );
}

export default App;
