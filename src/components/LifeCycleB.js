import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name:'Lanre'
        }
        console.log('LifecycleB constructor')
      }
      static getDerivedSateFromProps(props, state) {
          console.log('LifecycleB getDerivedSateFromProps')
          return null
      }

      componentDidMount(){
          console.log('LifecycleB componentDidMount')
      }
      shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
     }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
     }
      componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }
    render() {      
        console.log('LifecycleB render')
        return <div> LifeCycle B </div>         
    }
}

export default LifeCycleB
