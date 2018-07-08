import React from 'react'

const usrip = (props) =>{
  return(<div className="UserInput">
    <input type='text' onChange={props.change} value={props.name}/>

  </div>)

}

export default usrip
