import React, { Component } from 'react'

class LifeCycleB extends Component {
    // // Mounting Lifecycle methods
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        name: 'Priya'
    //     }
    //     console.log('LifecyclemethodB Constructor')
    //   }
  
    //   static getDerivedStateFromProps(props, state){
    //       console.log('LifecyclemethodB getDerivedStateFromProps')
    //       return null
    //   }
  
    //   componentDidMount(){
    //       console.log('LifecyclemethodB componentDidMount')
    //   }
  
    // render() {
    //   console.log('LifecyclemethodB render')
    //   return (
    //     <div>LifeCycle B</div>
    //   )
    // }


    // Updating Lifecycle methods
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

      shouldComponentUpdate(nextProps, nextState){
        console.log('LifecyclemethodB shouldComponentUpdate')
        return true
      }
    
      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecyclemethodB getSnapshotBeforeUpdate')
        return null
      }
    
      componentDidUpdate(prevProps, prevState, snapshot){
        console.log('LifecyclemethodB componentDidUpdate')
      }
  
    render() {
      console.log('LifecyclemethodB render')
      return (
        <div>LifeCycle B</div>
      )
    }
}

export default LifeCycleB