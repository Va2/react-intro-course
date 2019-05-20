import React from 'react';

import MyInfo from './MyInfo';
import CurrentTime from './CurrentTime';

function MainContent() {
    return (
        <main>
            <h3>Main Content</h3>
            <MyInfo />
            <CurrentTime />
        </main>
    )
}

export default MainContent;