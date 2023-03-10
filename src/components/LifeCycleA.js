import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
//     // Mounting Lifecycle methods

//     //Mounting 1
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name: 'Priya'
//       }
//       console.log('LifecyclemethodA Constructor')
//     }

//     //Mounting 2
//     static getDerivedStateFromProps(props, state){
//         console.log('LifecyclemethodA getDerivedStateFromProps')
//         return null
//     }

//     //Mounting 4
//     componentDidMount(){
//         console.log('LifecyclemethodA componentDidMount')
//     }

//     //Mounting 3
//   render() {
//     console.log('LifecyclemethodA render')
//     return (
//         <div>
//             <div>LifeCycle A</div>
//             <LifeCycleB/>
//         </div>
//     )
//   }


// Updating Lifecycle methods
constructor(props) {
    super(props)
  
    this.state = {
       name: 'Priya'
    }
    console.log('LifecyclemethodA Constructor')
  }

  //     //Update 1
  static getDerivedStateFromProps(props, state){
      console.log('LifecyclemethodA getDerivedStateFromProps')
      return null
  }

  componentDidMount(){
      console.log('LifecyclemethodA componentDidMount')
  }

  //     //Update 2
  shouldComponentUpdate(nextProps, nextState){
    console.log('LifecyclemethodA shouldComponentUpdate')
    return true
  }

  //     //Update 4
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecyclemethodA getSnapshotBeforeUpdate')
    return null
  }

  //     //Update 5
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('LifecyclemethodA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
        name: 'Kishan'
    })
  }

  //     //Update 3
render() {
  console.log('LifecyclemethodA render')
  return (
      <div>
          <div>LifeCycle A</div>
          <button onClick={this.changeState}>Change state</button>
          <LifeCycleB/>
      </div>
  )
}
}

export default LifeCycleA