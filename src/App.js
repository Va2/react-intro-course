import React, {Component} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "John",
            age: 25
        }
    }

    render() {
        return (
            <div>
                <Header />
                <MainContent />

                <div className="card">
                    <h4>{this.state.name}</h4>
                    <h4>{this.state.age} years old</h4>
                </div>

                <Footer />
            </div>
        )
    }
}

export default App;