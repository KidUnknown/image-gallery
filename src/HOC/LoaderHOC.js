import React, { Component } from 'react';

const LoaderHOC = (propName) => (WrappedComponent) => {
  
  return class LoaderHOC extends Component {

    isEmpty(propName) {
      return(
        propName === null ||
        propName === undefined ||
        (propName.hasOwnProperty('length') && propName.length === 0) ||
        (propName.constructor === Object && Object.keys(propName).length === 0)
      );
    }

    render() {
      return this.isEmpty(this.props[propName]) ? 
      <div className='loader'></div> : 
      <WrappedComponent {...this.props} /> 
    }
  }
}

export default LoaderHOC;
