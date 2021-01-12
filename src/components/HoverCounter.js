import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const {name, count, incrementCount} = this.props
        return (
                <h1 onMouseOver={incrementCount}>
                   {name} Hovered {count} times 
                </h1> 
        )
    }
}

export default withCounter(HoverCounter, 6) 

 
