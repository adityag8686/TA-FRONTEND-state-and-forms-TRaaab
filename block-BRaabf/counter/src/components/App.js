import React from "react";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            steps : 1,
            count : 0,
            max : Infinity
        };
    }

    handleMax = (event) =>{
        this.setState ({
            max: Number(event.target.innerText),
        });
    };

    handleSteps = (event) => {
        this.setState({
            steps: Number(event.target.innerText),
        });
    };
    handleInc = () => {
        this.setState({
            count:
                (this.state.count + this.state.steps  <= this.state.max)
                ? this.state.count+ this.state.steps
                : this.state.count 
        });
    };
    handleDec = () => {
        this.setState({
            count: (this.state.count - this.state.steps),
        });
    };
    handleReset = () => {
        this.setState({
            count: 0,
        });
    };

    render(){
        return (
            <>
                <h1>{this.state.count}</h1>
                <h2>Max</h2>
                <button onClick={this.handleMax}>15</button>
                <button onClick={this.handleMax}>100</button>
                <button onClick={this.handleMax}>200</button>
                <h2>Steps</h2>
                <button onClick={this.handleSteps}>5</button>
                <button onClick={this.handleSteps}>10</button>
                <button onClick={this.handleSteps}>15</button>
                <h2>Choose</h2>
                <button onClick={this.handleInc}>Increment</button>
                <button onClick={this.handleDec}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </>
        )
    }
}

export default App;