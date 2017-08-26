import React, { Component } from 'react'

class Right extends Component {
  render(){
    return(
          <div className='col'>
              This is getting changed in Component named Right <br/>
              Current action performed is  : {this.props.cust.currentEvent } <br/ >
          </div>       
      )
  }
}

export default Right