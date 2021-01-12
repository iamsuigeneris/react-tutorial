import React from 'react'


const  Hello = () => {

    // Using JSX syntax

    // return(
    //     <div>
    //         <h1>Hello Lanre Irewole</h1>
    //     </div>
    // )
    
   // Without JSX syntax

    return React.createElement(
        'div',
         {
           id:'hello',
           className: 'helloWorld'
         }, 
         React.createElement('h1', null,' Hello Mr Lanre ') 
         )
}

export default Hello