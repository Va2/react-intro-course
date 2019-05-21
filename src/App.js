import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// function App(props) {
//     return (
//         <div>
//             <h1>{props.whatever}</h1>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

class App extends React.Component {
    // Declare methods inside the class

    render() {
        // Running display logic (conditional rendering) and Style objects (inline styling) inside the render() method.


        return (
            <div>
                <h1>{this.props.whatever}</h1>

                <Header />
                <MainContent />
                <Footer />
            </div>
        )
    }
}

export default App;