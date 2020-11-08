import React from "react"

function Scoreboard(props) {
    return(
        <div className="scoreboard_div">
            <div className="you_div">
                <p>you</p>
            </div>
            <div className="cpu_div">
                <p>cpu</p>
            </div>
            <p className="score_text">{props.playerScore.toString() + ":" + props.cpuScore.toString()}</p>
        </div>
    )
}

export default Scoreboard