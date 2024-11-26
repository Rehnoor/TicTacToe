const gameBoard = (function () {
    // NOTE: const may not be mutable!
    const gb = [[null, null, null],
                [null, null, null],
                [null, null, null]]

    const markBoard = (player, positionX, positionY) => {
        if (positionX > 2 || positionY > 2) {
            alert("ERROR: marker not positioned properly")
        } else {
            if (gb[positionY][positionX] !== null) {
                alert("ERROR: proposed position is already filled")
            } else {
                gb[positionY][positionX] = player.getMarker();
            }
        }
    };

    const checkWin = (player) => {
        const rowOne = gb[0]
        const rowTwo = gb[1]
        const rowThree = gb[2]
        const colOne = [gb[0][0], gb[1][0], gb[2][0]]
        const colTwo = [gb[0][1], gb[1][1], gb[2][1]]
        const colThree = [gb[0][2], gb[1][2], gb[2][2]]
        const diagOne = [gb[0][0], gb[1][1], gb[2][2]]
        const diagTwo = [gb[0][2], gb[1][1], gb[2][0]]

        const combosToTest = [rowOne, rowTwo, rowThree, colOne, colTwo, colThree, diagOne, diagTwo]

        for (const combs of combosToTest) {
            let match = true;
            for (const m of combs) {
                if (m === null) {
                    match = false
                    break;
                }
                match = match && (m === player.getMarker())
            }
            if (match) {
                return true;
            }
        }

        return false;
    }

    const renderBoard = () => {
        
    }


    return {gb, markBoard, checkWin};
})();



function createPlayer(name, marker) {
    const n = name;
    const m = marker

    const getName = () => {
        return n
    }

    const getMarker = () => {
        return m
    }

    return {getName, getMarker}
}


const x = createPlayer("X", "X")

const o = createPlayer("O", "O")

function gameRun() {
    let gameEnd = false
    while (!gameEnd) {
        let playerXHor = prompt("Player X please enter your horizontal coordinate")
        let playerXVert = prompt("Player X please enter your vertical coordinate")

        gameBoard.markBoard(x, playerXHor, playerXVert)
        if (gameBoard.checkWin(x)) {
            alert("CONGRATS ON THE WIN PLAYER X")
            gameEnd = true
            break;
        }

        let playerOHor = prompt("Player O please enter your horizontal coordinate")
        let playerOVert = prompt("Player O please enter your vertical coordinate")

        gameBoard.markBoard(o, playerOHor, playerOVert)
        if (gameBoard.checkWin(o)) {
            alert("CONGRATS ON THE WIN PLAYER O")
            gameEnd = true
            break;
        }

    }
}
