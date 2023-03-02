// import logo from './logo.svg';
import About from './About';
import './App.css';
import Navbar from './Navbar';
// import Textform from './Textform';



function App() {
  return (
    <>

      <Navbar title="Text-utils" />
      <div className="container my-3">
      {/* <Textform  heading="Enter the text to analyze "/> */}
      <About/>
      </div>


    </>


  );
}

export default App;
