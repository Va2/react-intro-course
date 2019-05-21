import React from 'react';

import MyInfo from './MyInfo';
import CurrentTime from './CurrentTime';
import ContactCard from './ContactCard';
import Joke from './Joke';
import jokesData from '../jokesData';
import SchoolProduct from './SchoolProduct';
import schoolProductsData from '../schoolProductsData';

function MainContent() {
    const jokeComponents = jokesData.map((joke) => {
        return (
            <Joke
                key={joke.id}
                question={joke.question}
                punchline={joke.punchline}
            />
        )
    })

    const schoolProductComponents = schoolProductsData.map((item) => {
        return (
            <SchoolProduct
                key={item.id}
                product={item}
            />
        )
    })

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

            {jokeComponents}

            {schoolProductComponents}
        </main>
    )
}

export default MainContent;