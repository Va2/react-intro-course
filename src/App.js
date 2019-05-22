import React, {Component} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Conditional from './components/Conditional';

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "John",
            age: 25,
            isLoggedIn: false,
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500);
    }

    render() {
        let wordDisplay = this.state.isLoggedIn ? "in" : "out";

        return (
            <div>
                <Header />
                <MainContent />

                <div className="card">
                    <h4>{this.state.name} is {this.state.age} years old</h4>
                    <h4>and is currently logged {wordDisplay}.</h4>
                </div>

                <Conditional isLoading={this.state.isLoading} />
                <Footer />
            </div>
        )
    }
}

export default App;