import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Fade','Chucks','Wasiu','Fade']
    const persons = [
        { 
          id:1,
          name:'Wale',
          age:30,
          skill:'React'
        },
        { 
            id:2,
            name:'Shola',
            age:27,
            skill:'Angular'
          },
          { 
            id:3,
            name:'Femi',
            age:32,
            skill:'Vue'
          }
    ]
    const nameList = names.map((name, index) => <h2 key={index}> {index}  {name}</h2>)
        return <div> {nameList} </div> 
}

export default NameList
