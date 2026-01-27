import React, { useState, useEffect } from 'react';
import './Game.css';

const Game = () => {
    let initialArrayData = ["", "", "", "", "", "", "", "", ""];
    let [arrayData, setArrayData] = useState(initialArrayData);
    let [counter, setCounter] = useState(0);
    let [lock, setLock] = useState(false);
    let [message, setMessage] = useState("");

    const toggle = (e, num) => {
        if (lock || arrayData[num] !== "") {
            return; // Prevent overwriting and further moves after game over
        }

        let newData = [...arrayData];
        if (counter % 2 === 0) {
            newData[num] = 'X';
        } else {
            newData[num] = 'O';
        }
        setArrayData(newData);
        setCounter(counter + 1);
        gameOver(newData);
    };

    const winner = (win) => {
        setLock(true);
        setMessage(`Winner: ${win}`);
    };

    const gameOver = (data) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                winner(data[a]);
                return;
            }
        }

        // Check for a draw
        if (data.every(cell => cell !== "")) {
            setLock(true);
            setMessage("It's a draw!");
        }
    };

    const resetGame = () => {
        setArrayData(initialArrayData);
        setCounter(0);
        setLock(false);
        setMessage("");
    };

    return (
        <div className='container'>
            <h1>Tic Tac Toe Game In <span>React</span></h1>
            <div className="game-content">
                <div className="line one">
                    <span onClick={(e) => toggle(e, 0)}>{arrayData[0]}</span>
                    <span onClick={(e) => toggle(e, 1)}>{arrayData[1]}</span>
                    <span onClick={(e) => toggle(e, 2)}>{arrayData[2]}</span>
                </div>
                <div className="line two">
                    <span onClick={(e) => toggle(e, 3)}>{arrayData[3]}</span>
                    <span onClick={(e) => toggle(e, 4)}>{arrayData[4]}</span>
                    <span onClick={(e) => toggle(e, 5)}>{arrayData[5]}</span>
                </div>
                <div className="line three">
                    <span onClick={(e) => toggle(e, 6)}>{arrayData[6]}</span>
                    <span onClick={(e) => toggle(e, 7)}>{arrayData[7]}</span>
                    <span onClick={(e) => toggle(e, 8)}>{arrayData[8]}</span>
                </div>
                <button onClick={resetGame} disabled={!lock}>Reset</button>
                {message && <div className="message">{message}</div>}
            </div>
        </div>
    );
};

export default Game;