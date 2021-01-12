import React from 'react'

function Person({ person }) {
    return (
        <div>
            <h2>I am {person.name} age {person.age} years old.I'm skillful in {person.skill}</h2>
        </div>
    )
}

export default Person
