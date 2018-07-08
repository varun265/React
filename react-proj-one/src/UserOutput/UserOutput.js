import React from 'react'

const usrop = (props) =>{
  const style={
  backgroundColor:'yellow'
  }
return(<div>
  <p style = {style} onClick={props.changed}>hello, My name is  {props.name}</p>

</div>)
}

export default usrop
