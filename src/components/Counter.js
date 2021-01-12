import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increaseCount() {
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // () => { console.log('Callback value', this.state.count) })

        this.setState((prevState, props ) => ({
            count: prevState.count + 1
        })) 
        console.log(this.state.count)
    }
    incrementFive() {
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()

    }
    
    render() {
        return (
            <div>
                <div>count - { this.state.count}</div>
                <button onClick={ () => this.incrementFive() }>Increment</button>
            </div>
        )
    }
}

export default Counter
