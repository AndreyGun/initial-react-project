import React, { Component } from 'react';
import './app.css'

class App  extends Component {
    funct = () => {

    }
    render() {
        someFunc();
        return <div className="app">...App</div>
    }
}
const someFunc = async () => {
    const x = 10;
    const data = await x;
    console.log(data);
}
export default App;