import React, {Component} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Conditional from './components/Conditional';
import LoginBtn from './components/LoginBtn';

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "John",
            age: 25,
            isLoggedIn: false,
            isLoading: true,
            unreadMessages: [
                "Learn ReactJS",
                "New spam email"
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let wordDisplay = this.state.isLoggedIn ? "in" : "out";
        
        let btntext = this.state.isLoggedIn === true ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn === true ? "Logged in" : "Logged out"

        return (
            <div>
                <Header />
                <MainContent />

                <div className="card">
                    <h4>{this.state.name} is {this.state.age} years old</h4>
                    <h4>and is currently logged {wordDisplay}.</h4>
                </div>

                <div className="card">
                    {
                        this.state.isLoading ?
                        <h1>Loading...</h1> : 
                        <Conditional />
                    }
                </div>

                {
                    this.state.unreadMessages.length > 0 &&
                    <div className="card">
                        <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                    </div>
                }

                <div className="card">
                    <h3>{displayText}</h3>
                    <button onClick={this.handleClick}>{btntext}</button>
                </div>

                <Footer />
            </div>
        )
    }
}

export default App;