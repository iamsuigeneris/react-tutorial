import react from 'react'

const Greet = props => {
   const {name, heroName} = props
    return(
        <div>
            <h1>Hello {name} aka {heroName}</h1>
            {/* {props.children}  */}
        </div>
    )

}

export default Greet