import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

// Mounting Lifecycle methods
class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Priya'
      }
      console.log('LifecyclemethodA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyclemethodA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecyclemethodA componentDidMount')
    }

  render() {
    console.log('LifecyclemethodA render')
    return (
        <div>
            <div>LifeCycle A</div>
            <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycleA