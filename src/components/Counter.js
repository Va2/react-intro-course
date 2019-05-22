import React from 'react';

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        // Don't need to know previous state (OBJECT):
        // this.setState({ count: 1 })

        // Need to know previous state (pass Function):
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
           <div className="card">
                <h3>Counter</h3>
                <h4>{this.state.count}</h4>
                <button onClick={this.handleClick}>Change!</button>
           </div>
        )
    }
}

export default Counter;