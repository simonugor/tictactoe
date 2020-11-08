import React from "react"

function Popup(props) {

    function callPlayAgain() {
        props.playAgain()
    }

    return (
        <div style={{display: props.display}} className="popup_div">
            <div className="popup">
                <p className="popup_text">{props.text}</p>
                <button onClick={callPlayAgain} className="popup_button" style={{backgroundColor: props.buttonBg}}>Play Again!</button>
            </div>
        </div>
    )
}

export default Popup