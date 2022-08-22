import React from 'react';
import data from '../data';
import Food from './Food';

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        activeCategory: '',
        };
    }
    handleClick = (category) => {
        this.setState({
        activeCategory: category,
        });
    };
    handleAll = () => {
        this.setState({
        activeCategory: '',
        });
    };
  render() {
    let unique = [...new Set(data.map((cv) => cv.category))];
    let allFood;
    if (!this.state.activeCategory) {
        allFood = data.reduce((acc, cv) => {
            acc = acc.concat(cv);
            return acc;
        }, []);
        } else {
        allFood = data.filter(
            (food) => food.category === this.state.activeCategory
        );
        }
    return (
        <>
            <ul className="flex">
                <li onClick={this.handleAll}>
                    All
                </li>
            {unique.map((category) => (
                <li
                key={category}
                onClick={() => this.handleClick(category)}
                >
                {category}
                </li>
            ))}
        </ul>
        <Food allFood={allFood} />
        </>
    );
}
}

export default Tags;