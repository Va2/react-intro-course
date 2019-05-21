import React, {Component} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "John",
            age: 25,
            isLoggedIn: false
        }
    }

    render() {
        // let wordDisplay = this.state.isLoggedIn === false ? "out" : "in";
        let wordDisplay = this.state.isLoggedIn ? "in" : "out";

        return (
            <div>
                <Header />
                <MainContent />

                <div className="card">
                    <h4>{this.state.name} is {this.state.age} years old</h4>
                    <h4>and is currently logged {wordDisplay}.</h4>
                </div>

                <Footer />
            </div>
        )
    }
}

export default App;