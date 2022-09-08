import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handlertoUpChnage = ()=>{

        console.log("check this");
        let upercaretest = text.toUpperCase();
        setText(upercaretest);
        props.showAlert("Converted to Uppercase", 'success');
    }

    const HandlertoOnchamge = (event)=>{
        console.log("onchange");

        setText(event.target.value);

    }

    const handletolower = ()=>{

        let convertoLower = text.toLowerCase();
        setText(convertoLower);
        props.showAlert(' Converted to Lowercase', 'success');
    }

    const handleStringclearText = (event)=>{

       setText('');
       props.showAlert("Cleared Test",'warning');

    };

    const handleCopyText = ()=>{

        var myText = document.getElementById("mybox");
            myText.select();
            navigator.clipboard
            .writeText(myText.value)
            .then(() => {
                alert("successfully copied");
            })
            .catch(() => {
                alert("something went wrong");
            });
            props.showAlert("Copy Text",'success');

    };

    const handleRemoveExtraSpace = ()=>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    }

  return (

    <>
    <div className='container my-3' style={{ color: props.mode ==='light'? 'black': 'white'}}>
            <h1 style={{ color : props.mode==='light'? 'black':'white'}} >{props.headingofFrom}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={HandlertoOnchamge} style={{ backgroundColor : props.mode ==='light'? 'white': 'gray', color: props.mode ==='light' ? 'black': 'white'}} id="mybox" rows="6"></textarea>
           
            </div>
            <button type="button" className="btn btn-primary mx-3" onClick={handlertoUpChnage}>Convert To UperCase</button>
            <button type="button" className="btn btn-primary btn-success mx-1" onClick={handletolower}>Convert To Lowercase</button>

            <button type="button" className="btn btn-primary btn-success mx-1" onClick={handleStringclearText}>Clear text</button>

            <button type="button" className="btn btn-primary btn-success mx-1" onClick={handleCopyText}>Copy text</button>
            <button type="button" className="btn btn-primary btn-success mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>

    </div>

    <div className="container my-3" style={{ color: props.mode==='light' ? 'black': 'white'}}>

        <h2>Your Result Summary</h2>

        <p> {text.split(" ").length} words and {text.length} characters.</p>
        <p> {0.008 * text.split(" ").length}  Miniute to Read</p>

        <h3>Prevoew</h3>
        <p>{text.length>0?text: 'Enter text above text area for preview of text.'}</p>
    </div>
    </>
  )
}
