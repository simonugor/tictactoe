import React from "react"

function Buttons(props) {

    function buttonClick(event) {
        if (props.playTurn === "player") {
            props.handleClick(event)
        }
    }

    const buttons = props.buttons.map(button => {
        return (<button id={button.id} style={{backgroundImage: button.bg}} key={button.id} className="button" onClick={buttonClick}></button>)
    })

    return(
        <div className="buttons_div">
            {buttons.slice(0,3)}
            <br />
            {buttons.slice(3,6)}
            <br />
            {buttons.slice(6,9)}
        </div>
    )
}

export default Buttons