import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name:'Lanre'
        }
        console.log('LifecycleA constructor')
      }
      static getDerivedSateFromProps(props, state) {
          console.log('LifecycleA getDerivedSateFromProps')
          return null
      }

      componentDidMount(){
          console.log('LifecycleA componentDidMount')
      }
      shouldComponentUpdate(){
          console.log('LifecycleA shouldComponentUpdate')
          return true
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
          console.log('LifecycleA getSnapshotBeforeUpdate')
          return null
      }
      componentDidUpdate() {
          console.log('LifecycleA componentDidUpdate')
      }
      changeState = () => {
          this.setState({
              name: 'iamsuigeneris'
          })
      }


    render() {
        console.log('LifecycleA render')
        return (
            <div> 
              <div>LifeCycle A</div>
              <button onClick={this.changeState}>Change State</button>
              <LifeCycleB />
            </div>  
        )      
    }
}

export default LifeCycleA
