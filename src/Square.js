import React from "react";
import "./style/Square.css";

const green = '#39D1B4';
const yellow = '#FFD712';
const white = '#FFFFFF';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: white
        }
    }

    changeColor() {
        this.setState({color:yellow});
    }
    
    render() {
        return (
            <button 
                className="square"
                onClick={() => this.changeColor()}
                style={{background:this.state.color}}
            >              
            </button>
        )
    }
}

export default Square;