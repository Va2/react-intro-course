import React from 'react';

import MyInfo from './MyInfo';
import CurrentTime from './CurrentTime';
import ContactCard from './ContactCard';

function MainContent() {
    return (
        <main>
            <h3>Main Content</h3>
            <MyInfo />
            <CurrentTime />

            <ContactCard
                contact = {{
                    name: "John Doe",
                    imgUrl: "http://lorempixel.com/500/280/animals/1",
                    phone: "+32 2 226 53 53",
                    email: "john@mail.com"
                }}
            />

            <ContactCard
                contact = {{
                    name: "Mary Pop",
                    imgUrl: "http://lorempixel.com/500/280/animals/2",
                    phone: "+32 2 226 45 99",
                    email: "mary@mail.com"
                }}
            />

            <ContactCard
                contact = {{
                    name: "Jack Pixel",
                    imgUrl: "http://lorempixel.com/500/280/animals/3",
                    phone: "+32 2 226 33 88",
                    email: "jack@mail.com"
                }}
            />

            <ContactCard
                contact = {{
                    name: "Betty Dol",
                    imgUrl: "http://lorempixel.com/500/280/animals/4",
                    phone: "+32 2 226 12 34",
                    email: "betty@mail.com"
                }}
            />
        </main>
    )
}

export default MainContent;