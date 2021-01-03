import { useState } from "react"
import './App.css';
//importing components
import Buttons from "./components/Buttons"
import Scoreboard from "./components/Scoreboard"
import Popup from "./components/Popup"

import X from "./components/images/x.png"
import O from "./components/images/o.png"

function App() {

  const [buttons, setButtons] = useState([
    {id: "1", bg: "", player: ""}, 
    {id: "2", bg: "", player: ""}, 
    {id: "3", bg: "", player: ""},
    {id: "4", bg: "", player: ""},
    {id: "5", bg: "", player: ""},
    {id: "6", bg: "", player: ""},
    {id: "7", bg: "", player: ""},
    {id: "8", bg: "", player: ""},
    {id: "9", bg: "", player: ""}    
  ])

  var turn = "player"
  var won = false

  const [playTurn, setPlayTurn] = useState("player")

  const [popupDisplay, setPopupDisplay] = useState("none")
  const [popupText, setPopupText] = useState("")
  const [buttonBg, setButtonBg] = useState("")

  const [playerScore, setPlayerScore] = useState(0)
  const [cpuScore, setCpuScore] = useState(0)

  function playAgain() {
    setPopupDisplay("none")
    setPlayTurn("player")
    setButtons([
      {id: "1", bg: "", player: ""}, 
      {id: "2", bg: "", player: ""}, 
      {id: "3", bg: "", player: ""},
      {id: "4", bg: "", player: ""},
      {id: "5", bg: "", player: ""},
      {id: "6", bg: "", player: ""},
      {id: "7", bg: "", player: ""},
      {id: "8", bg: "", player: ""},
      {id: "9", bg: "", player: ""}    
    ])
  }

  function handleClick(event) {
    event.preventDefault()
    if (playTurn === "player") {
      var id = event.target.id
      setButtons(buttons.map(button => {
        if (button.id === id && button.bg === "") {
          button.bg = `url(${X})`
          button.player = "x"
          turn = "cpu"
          setPlayTurn("cpu")
          xWinCheck()
          setTimeout(cpuTurn, 800)
        } else if (button.id === id && button.bg !== "") {
          alert("Please secelt another field")
        }
        return button
      }))
    }
  }

  //random number function
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function cpuTurn() {
    if (turn === "cpu" && won === false) {
      var freeFields = []
      var randomNumber = Math.round(getRandomArbitrary(1, 10)) //random number function here
      buttons.map(button => {
        if (button.bg === "") {
          freeFields.push(button.id)
        }
        return button
      })
      if (freeFields.length !== 0) {
        if (freeFields.includes(randomNumber.toString())) {
          setButtons(buttons.map(button => {
            if (button.id === randomNumber.toString()) {
              button.bg = button.bg = `url(${O})`
              button.player = "o"
              setPlayTurn("player")
              oWinCheck()
            }
            return button
          }))
        } else {
          cpuTurn()
        }
      } else {
        setPopupText("Draw")
        setButtonBg("gainsboro")
        setPopupDisplay("flex")
      }
    }
  }

  function xWon() {
    setPopupText("You Won!")
    setButtonBg("green")
    setPlayerScore(prevState => prevState + 1)
    won = true
    setPopupDisplay("flex")
  }

  function oWon() {
    setPopupText("You Lost!")
    setButtonBg("red")
    setCpuScore(prevState => prevState + 1)
    setPopupDisplay("flex")
  }

  function xWinCheck() {
    var xFields = []
    buttons.map(button => {
      if (button.player === "x") {
        xFields.push(button.id)
      }
      return button
    })
    
    //rows
    if (xFields.includes("1") && xFields.includes("2") && xFields.includes("3")) {
      setTimeout(xWon, 150)
    } else if (xFields.includes("4") && xFields.includes("5") && xFields.includes("6")) {
      setTimeout(xWon, 150)
    } else if (xFields.includes("7") && xFields.includes("8") && xFields.includes("9")) {
      setTimeout(xWon, 150) //columns
    } else if (xFields.includes("1") && xFields.includes("4") && xFields.includes("7")) {
      setTimeout(xWon, 150)
    } else if (xFields.includes("2") && xFields.includes("5") && xFields.includes("8")) {
      setTimeout(xWon, 150)
    } else if (xFields.includes("3") && xFields.includes("6") && xFields.includes("9")) {
      setTimeout(xWon, 150) //diagonals
    } else if (xFields.includes("1") && xFields.includes("5") && xFields.includes("9")) {
      setTimeout(xWon, 150)
    } else if (xFields.includes("3") && xFields.includes("5") && xFields.includes("7")) {
      setTimeout(xWon, 150)
    } 
  }

  function oWinCheck() {
    var oFields = []
    buttons.map(button => {
      if (button.player === "o") {
        oFields.push(button.id)
      }
      return button
    })
    
    //rows
    if (oFields.includes("1") && oFields.includes("2") && oFields.includes("3")) {
      setTimeout(oWon, 150)
    } else if (oFields.includes("4") && oFields.includes("5") && oFields.includes("6")) {
      setTimeout(oWon, 150)
    } else if (oFields.includes("7") && oFields.includes("8") && oFields.includes("9")) {
      setTimeout(oWon, 150) //columns
    } else if (oFields.includes("1") && oFields.includes("4") && oFields.includes("7")) {
      setTimeout(oWon, 150)
    } else if (oFields.includes("2") && oFields.includes("5") && oFields.includes("8")) {
      setTimeout(oWon, 150)
    } else if (oFields.includes("3") && oFields.includes("6") && oFields.includes("9")) {
      setTimeout(oWon, 150) //diagonals
    } else if (oFields.includes("1") && oFields.includes("5") && oFields.includes("9")) {
      setTimeout(oWon, 150)
    } else if (oFields.includes("3") && oFields.includes("5") && oFields.includes("7")) {
      setTimeout(oWon, 150)
    }
  }

  return (
    <div className="main_div">
      <h1 className="heading">Tic-Tac-Toe</h1>
      <p className="signature">by Simon</p>
      <Scoreboard 
        playerScore={playerScore}
        cpuScore={cpuScore}
      />
      <Buttons playTurn={playTurn} handleClick={handleClick} buttons={buttons} />
      <Popup
        display={popupDisplay}
        text={popupText}
        buttonBg={buttonBg}
        playAgain={playAgain}
      />
      <a href="https://myportfo1io.online/"><button className="btp-button">Back to portfolio</button></a>
    </div>
  );
}

export default App;
