function Food (props) {
    return (
        <div >
            {props.allFood.map((food) => (
            <div >
              <img
                src={food.img}
                width="40%"
                height="300px"
              ></img>
              <p>{food.title}</p>
              <h3>{food.category}</h3>
              <p>{food.price}</p>
              <p>{food.desc}</p>
            </div>
            ))}
        </div>
    )
}

export default Food;