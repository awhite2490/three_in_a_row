import React from "react";
import Square from "./Square.js";
import "./style/Board.css";

class Board extends React.Component {
    renderSquare(i) {
        return <Square>
            value=i
        </Square>
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

export default Board;