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

    componentDidMount() {
        // GET the data I need to correctly display
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }

    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // Ex: remove event listener
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

                <Footer />
            </div>
        )
    }
}

export default App;