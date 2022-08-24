import React from 'react';
import data from '../data';
import Modal from './Modal';
class MovieList extends React.Component {
constructor() {
    super();
    this.state = {
        activeIndex: null,
    };
}
handleClick = (index) => {
    this.setState({
        activeIndex: index,
    });
};
handleToggle = () => {
    this.setState({
        activeIndex: null,
    });
};
isActive() {
    if (this.state.activeIndex || this.state.activeIndex === 0) return true;
    else return false;
}
render() {
    return (
        <div>
            {!this.isActive() ? (
            <ul >
                {data.map((movie, index) => (
                <li key={index}>
                <img src={movie.Images[0]} alt="" width="300px" />
                <div>
                    <h3>
                        {movie.Title}
                    </h3>
                    <h4 >
                        Released at {movie.Released}
                    </h4>
                    <button
                    
                    onClick={() => {
                        this.handleClick(index);
                    }}
                    >
                        More Info
                    </button>
                </div>
                </li>
            ))}
            </ul>
        ) : (
            <div>
                <button
                onClick={this.handleToggle}
                >
                ❌
                </button>
                <Modal activeIndex={this.state.activeIndex} />
            </div>
        )}
        </div>
    );
}
}

export default MovieList;