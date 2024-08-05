import React, { Component } from 'react'
import car from './car.gif'
export class Spinner extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='text-center'>
        <img src={car} alt="loading"  />
      </div>
    )
  }
}

export default Spinner
