import React from 'react';

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.plus1 = this.plus1.bind(this)
        this.minus1 = this.minus1.bind(this)
        this.devideBy2 = this.devideBy2.bind(this)
    }
    
    plus1() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    minus1() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    devideBy2() {
        this.setState((prevState) => {
            return {
                count: prevState.count / 2
            }
        })
    }

    render() {
        return (
           <div className="card">
                <h3>Counter</h3>
                <h4>{this.state.count}</h4>
                <button onClick={this.plus1}>Plus 1</button>
                <button onClick={this.minus1}>Minus 1</button>
                <button onClick={this.devideBy2}>Devide by 2</button>
           </div>
        )
    }
}

export default Counter;