import React from 'react';
import Person from './Person';

const PersonList = () => {

    const people = [
        {
            img: 22,
            name: "John",
            job: "Developer"
        },
        {
            img: 34,
            name: "Bob",
            job: "Designer"
        },
        {
            img: 56,
            name: "Peter",
            job: "Artist"
        },
    ]

    return (
        <section>
            <Person person={people[0]} />
            <Person person={people[1]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nostrum eius quo deserunt voluptate veniam!
        </Person>
            <Person person={people[2]} />
        </section>
    );
}

export default PersonList;