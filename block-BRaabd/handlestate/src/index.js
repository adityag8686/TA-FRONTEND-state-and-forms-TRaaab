import React from "react";
import ReactDOM  from "react-dom";

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            imageName : "Basketball",
        };
    }
    handleClick = (event) => {
        let imagename = event.target.innerText;
        this.setState({
            imageName : imagename
        });
    };
    render() {
        return (
            <>
        <div>
            <button onClick={this.handleClick}>basketball</button>
            <button onClick={this.handleClick}>cricket</button>
            <button onClick={this.handleClick}>laptop</button>
            <button onClick={this.handleClick}>phone</button>
            <button onClick={this.handleClick}>pubg</button>
            <button onClick={this.handleClick}>show-image</button>
            <button onClick={this.handleClick}>tiger</button>
        </div>
        <div>
            <img src={`/assets/${this.state.imageName}.jpg`}  width = {'500 px'}/>
        </div>
        </>
    );
    }
}

ReactDOM.render(<Card />, document.querySelector("#root"));
