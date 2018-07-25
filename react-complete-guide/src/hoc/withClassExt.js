import React from 'react'

const withClassExt=(WrappedComponent, className) =>{
  return (props)=>(
      <div className ={className}>
    <WrappedComponent {...props}/>
  </div>
)

}

export default withClassExt;
