import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Priya'
        }
        console.log('LifecyclemethodB Constructor')
      }
  
      static getDerivedStateFromProps(props, state){
          console.log('LifecyclemethodB getDerivedStateFromProps')
          return null
      }
  
      componentDidMount(){
          console.log('LifecyclemethodB componentDidMount')
      }
  
    render() {
      console.log('LifecyclemethodB render')
      return (
        <div>LifeCycle B</div>
      )
    }
}

export default LifeCycleB