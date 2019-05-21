import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
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