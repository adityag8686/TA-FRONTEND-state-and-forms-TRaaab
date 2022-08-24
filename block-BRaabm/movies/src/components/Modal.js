import React from 'react';
import data from '../data';
class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.movie = data[this.props.activeIndex];
    }
    
    render(){
        
        return (
            <div >
                <img  src={this.movie.Images[0]} alt="" width={"300px"} />
                <div>
                    <h3>{this.movie.Title}</h3>
                    <h3>{this.movie.Director}</h3>
                    <h3>{this.movie.Writer}</h3>
                    <h3>{this.movie.imdbID}</h3>
                    <h3>{this.movie.imdbRating}</h3>
                    <h3>{this.movie.Response}</h3>


                </div>
            </div>
        )
    }
}

export default Modal;