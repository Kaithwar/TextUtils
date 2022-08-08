import React, { useState } from 'react'

export default function Home(props) {
    const UpClick = () =>{
        // console.log("UpperCase was Clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lwClick = () =>{
        // console.log("UpperCase was Clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const Clear = () =>{
        setText('')
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopy = () =>{
        var text = document.getElementById("mybox1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }


    const [text, setText] = useState('')
  return (
    <>
    <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="mybox" className="form-label">Email address</label>
            <input type="email" className="form-control" id="mybox" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="mybox" className="form-label">Enter your text</label>
            <textarea className="form-control" id="mybox1" value={text} onChange={handleOnChange} rows="8" placeholder='Enter your text'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={lwClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
        <br/>
        <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text Summary:</h2>
        <p>{text.split(" ").length -1} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length-1)} Minutes take to read </p>
        <div className='border border-secondary p-4 rounded'>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in above box to preview it."}</p>
        </div>
    </div>
    </>
    
  )
}
