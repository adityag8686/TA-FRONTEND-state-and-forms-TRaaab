import React from "react";
import Form from './Form';
import Registration from './Registration';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <Form/>
                <Registration/>
            </>
        )
    }

}

export default App;