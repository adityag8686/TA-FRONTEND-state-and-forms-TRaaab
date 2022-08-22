import React from "react";
import questions from "../data";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex : null,
        }
    }

    render(){
        return (
            <>
        <h1>AltCampus FAQ</h1>
        <ul>
          {questions.map((question, index) => (
            <li>
              <h2
                onClick={() => {
                  this.setState({
                    activeIndex:
                      this.state.activeIndex === index ? null : index,
                  });
                }}
              >
                {question.Q} {this.state.activeIndex === index ? '👆🏾' : '👇🏻'}
              </h2>
              {index === this.state.activeIndex && <p>{question.A}</p>}
            </li>
          ))}
        </ul>
      </>
        )
    }
}

export default App;