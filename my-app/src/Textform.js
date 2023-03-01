import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handledownClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        // console.log("Lowercase was clicked " + text);
        let newText = " ";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (<>
        <div className='container'>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}> Convert to Uppercase </button> 
            <button className='btn btn-primary mx-1' onClick={handledownClick}> Convert to Lowercase </button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}> Clear text </button>
        </div> 
        <div className="container my-2">
            <h1> Your text summary : </h1>
            <p> Text length : {text.length}</p>
            <p> {0.008 * text.split("").length} min read</p>
        </div>
        </>
    )
}
