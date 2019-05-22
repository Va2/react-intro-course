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

    // UNSAFE_componentWillMount() {
        // => DEPRECIATED: add prefix (UNSAFE_) from v17.x.x
    // }

    componentDidMount() {
        // GET the data I need to correctly display
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // => DEPRECIATED: add prefix (UNSAFE_) from v17.x.x
    // }

    static getDerivedStateFromProps() { // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // return the new, updated state based upon the props
        // It is for the rare cases when your components need to takes incomming props it's receiving from it's parent and set it's own state based upon those props.
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way thongs are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }

    // UNSAFE_componentWillUpdate() {
        // => DEPRECIATED: add prefix (UNSAFE_) from v17.x.x
    // }

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