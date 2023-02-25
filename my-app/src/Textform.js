import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (<>
        <div className='container'>
            <h1> {props.heading} - {text}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}> Convert to Uppercase </button>
        </div> 
        <div className="container my-2">
            <h1> Your text summary : </h1>
            <p> Text length : {text.length}</p>
        </div>
        </>
    )
}
