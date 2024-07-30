import { useState } from "react";
export default function Textarea(Props) {
    const handleUpClick = () => {
        console.log("upper case was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleloClick = () => {
        console.log("upper case was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("on change", event.target.value)
        setText(event.target.value)
    }
    const handleclearClick = (event) => {
        console.log("on change", event.target.value)
        setText("")
    }
    const [text, setText] = useState('Enter text here')
    return (
        <>
            <div className={'mb-3 ${props.mode}'}>
                <h1 >{Props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="buttons">
                <button className='btn btn-primary m-1' onClick={handleUpClick}> convert to uppercase </button>
                <button className='btn btn-primary m-1' onClick={handleloClick}> convert to lowercase </button>
                <button className='btn btn-primary m-1' onClick={handleclearClick}> clear text </button>
            </div>

            <div className="container my-3">
                <h1>
                    Your Text Summary
                </h1>
                <p>{text.split(" ").length}  words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} miniutes to read the above text </p>
                <h2>
                    Preview
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
