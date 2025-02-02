import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItems extends Component {

  render() {
    let {title, description, imageurl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <img src={imageurl?imageurl:"https://images.moneycontrol.com/static-mcnews/2023/12/markets15.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read more...</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItems
