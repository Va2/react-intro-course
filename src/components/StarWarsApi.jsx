import React, { Component } from 'react';
 
class StarWarsApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }
    
    render() {
        const text = this.state.loading
          ? "Loading..."
          : this.state.character.name
        return (
            <div className="card">
                {text}
            </div>
        );
    }
}
export default StarWarsApi