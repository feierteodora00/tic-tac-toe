import React from "react";

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            player: "X",
            winner: ""
        }
    }

    topLeftClick = () => {
        if (document.getElementById("1").innerText !== "X" && document.getElementById("1").innerText !== "O") {
            document.getElementById("1").innerHTML = this.state.player;
            document.getElementById("1").setAttribute("class", "black")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
    }

    topCenterClick = () => {
        if (document.getElementById("2").innerText !== "X" && document.getElementById("2").innerText !== "O") {
            document.getElementById("2").innerHTML = this.state.player;
            document.getElementById("2").setAttribute("class", "black center-col")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
    }

    topRightClick = () => {
        if (document.getElementById("3").innerText !== "X" && document.getElementById("3").innerText !== "O") {
            document.getElementById("3").innerHTML = this.state.player;
            document.getElementById("3").setAttribute("class", "black")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
    }

    middleLeftClick = () => {
        if (document.getElementById("4").innerText !== "X" && document.getElementById("4").innerText !== "O") {
            document.getElementById("4").innerHTML = this.state.player;
            document.getElementById("4").setAttribute("class", "black center-row")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
    }

    middleCenterClick = () => {
        if (document.getElementById("5").innerText !== "X" && document.getElementById("5").innerText !== "O") {
            document.getElementById("5").innerHTML = this.state.player;
            document.getElementById("5").setAttribute("class", "black center-col center-row")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
    }

    middleRightClick = () => {
        if (document.getElementById("6").innerText !== "X" && document.getElementById("6").innerText !== "O") {
            document.getElementById("6").innerHTML = this.state.player;
            document.getElementById("6").setAttribute("class", "black center-row")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
    }

    bottomLeftClick = () => {
        if (document.getElementById("7").innerText !== "X" && document.getElementById("7").innerText !== "O") {
            document.getElementById("7").innerHTML = this.state.player;
            document.getElementById("7").setAttribute("class", "black")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
        
    }

    bottomCenterClick = () => {
        if (document.getElementById("8").innerText !== "X" && document.getElementById("8").innerText !== "O") {
            document.getElementById("8").innerHTML = this.state.player;
            document.getElementById("8").setAttribute("class", "black center-col")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
    
    }

    bottomRightClick = () => {
        if (document.getElementById("9").innerText !== "X" && document.getElementById("9").innerText !== "O") {
            document.getElementById("9").innerHTML = this.state.player;
            document.getElementById("9").setAttribute("class", "black")
            if (this.state.player === "X"){
                this.setState({player:"O"})
            } else {
                this.setState({player:"X"})
            }
        }
        
    }

    isWinner = () => {
        let winner = ""
        let elements = []
        for (let i=1;i<10;i++) {
            elements[i] = document.getElementById(i).innerText
        }
        if (elements[1] === elements[2] && elements[2] === elements[3]) {
            if (elements[1] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else if (elements[1] === elements[4] && elements[4] === elements[7]) {
            if (elements[1] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else if (elements[1] === elements[5] && elements[5] === elements[9]) {
            if (elements[1] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else if (elements[2] === elements[5] && elements[5] === elements[8]) {
            if (elements[5] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else if (elements[4] === elements[5] && elements[5] === elements[6]) {
            if (elements[5] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else if (elements[3] === elements[6] && elements[6] === elements[9]) {
            if (elements[9] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else if (elements[3] === elements[5] && elements[5] === elements[7]) {
            if (elements[5] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else if (elements[7] === elements[8] && elements[8] === elements[9]) {
            if (elements[9] === "X") {
                winner = "player 1"
            } else {
                winner = "player 2"
            }
        } else {
            let allCellsUsed = true
            for (let i=1;i<10;i++) {
                //console.log(typeof(elements[i]), typeof(i))
                if (elements[i] === String(i)){
                    allCellsUsed = false
                    break
                }
            }
            
            if (allCellsUsed) {
                winner = "draw"
            }
        }
        this.setState({winner: winner})

        //console.log(winner)
    }

    reloadPage = () => {
        window.location.replace("/")
    }

    render () {
        let endgame = ""
        let hidden = true
        if (this.state.winner !== "" && this.state.winner !== "draw"){
            endgame = "The winner is " + this.state.winner + ". Congratulations !"
            hidden = false
        } else if (this.state.winner !== "" && this.state.winner === "draw"){
            endgame = "Draw, nobody won. Try again !"
            hidden = false
        }

        return (
            <div>
                <table className="board" onClick={this.isWinner} id = "board">
                    <tbody>
                        <tr className="row">
                            <td id="1" onClick={this.topLeftClick}>
                                1
                            </td>
                            <td className="center-col" id="2" onClick={this.topCenterClick}>
                                2
                            </td>
                            <td id="3" onClick={this.topRightClick}>
                                3
                            </td>
                        </tr>
                        <tr className="row">
                            <td className="center-row" id="4" onClick={this.middleLeftClick}>
                                4
                            </td>
                            <td className="center-col center-row" id="5" onClick={this.middleCenterClick}>
                                5
                            </td>
                            <td className="center-row" id="6" onClick={this.middleRightClick}>
                                6
                            </td>
                        </tr>
                        <tr className="row">
                            <td id="7" onClick={this.bottomLeftClick}>
                                7
                            </td>
                            <td className="center-col" id="8" onClick={this.bottomCenterClick}>
                                8
                            </td>
                            <td id="9" onClick={this.bottomRightClick}>
                                9
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>{endgame}</p>
                <button onClick={this.reloadPage} hidden={hidden}>Play again</button>
            </div>
        )
    }
   
}

export default Game;