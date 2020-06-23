import React, { Component } from 'react';
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            doubleCount: false,
        };
    }
    increment = () => {
        if (this.state.count < 20) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1

            })
        }
    }
    clear = () => {
        this.setState({
            count: 0,
        })
    }
    double = () => {
        if (this.state.doubleCount) {
            this.setState({
                coubleCount: true,
            })
            console.log(this.state.doubleCount)
        }
    }

    render() {
        return ( <
            div className = "container" >
            <
            div className = "navbar" > Counter.js < /div>    <
            div className = "counter" >




            <
            h1 > { this.state.count } < /h1>     <
            button type = "button"
            onClick = { this.increment } > increment < /button>    <
            button type = "button"
            onClick = { this.decrement } > Decrement < /button>  <
            button type = "button"
            onClick = { this.clear } > clear < /button> <
            button type = "button"
            onClick = { this.double } > {
                this.state.doubleCount ? "Double Count" : 'Single Count" } <
                    /button>  < /
                div >


                <
                /div>
            );
        };

    };

    export default Counter;