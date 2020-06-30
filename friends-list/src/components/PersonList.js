import React from 'react';
import Person from './Person';
import personListData from '../data/personListData.json'

const PersonList = () => {

    const people = personListData

    return (
        <section>
            {people.map
                (person =>
                    (
                        <Person
                            key={person.img}
                            person={person}
                        />
                    )
                )
            }
        </section>
    );
}

export default PersonList;