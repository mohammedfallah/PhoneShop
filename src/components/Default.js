//کامپوننت  404

import React, { Component } from 'react'
import notfound from '../img/notfound.svg' ;
export default class Default extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
            <h1 className='display-3'>404</h1>
            <h1>error</h1>
            <h1>صفحه مورد نظر یافت نشد </h1>
            <img  src={notfound } width={900} height={430} style={{borderImage:'5px'}} />
            <h3>the requested url
              <span className='text-danger'>
                {this.props.location.pathname}
              </span>{" "}was not found
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
