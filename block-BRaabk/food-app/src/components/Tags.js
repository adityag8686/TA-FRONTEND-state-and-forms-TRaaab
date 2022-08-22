import React from "react";
import data from "../data";
import Food from "./Food";

let unique = [...new Set(data.map((cv) => cv.category))];

class Tags extends React.Component{
    constructor(){
        super();
        this.state = {
            activeCategory : "",
        };
    }

    handleAll = () =>{
        this.state = {
            activeCategory : "",
        };
    }

    handleClick = (event) => {
        this.state = {
            activeCategory : event.target.name,
        };
    }

    render(){
        let allFood ;
        if (!this.state.activeCategory){
            allFood = data;
        }
        else{
            allFood = data.filter((item) => (item.category === this.state.activeCategory))  
        }


        return (
            <>
               <ul className="flex">
          <li className="active" onClick={this.handleAll}>
            All
          </li>
          {unique.map((category) => (
            <li
              onClick={() => this.handleClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
                <Food allFood = {allFood}/>
            </>
        )
    }

}

export default Tags;
