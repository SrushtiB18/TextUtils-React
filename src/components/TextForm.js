import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleCapiClick = ()=>{
        var separateWord = text.toLowerCase().split(' ');
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
        }
        setText(separateWord.join(' '))
        props.showAlert("Converted to capitalize!", "success")
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success")
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }

    const [text, setText] = useState('Enter text here')
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#232323'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#232323':'white', color: props.mode === 'dark'?'white':'#232323'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary me-3" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary me-3" onClick={handleCapiClick}>Capitalize text</button>
            <button className="btn btn-primary me-3" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary me-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary me-3" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
