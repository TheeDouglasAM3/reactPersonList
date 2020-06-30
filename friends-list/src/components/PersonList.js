import React from 'react';
import Person from './Person';
import personListData from '../data/personListData.json'

const PersonList = () => {

    const people = personListData

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