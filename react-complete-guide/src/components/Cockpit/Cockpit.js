import React from 'react'
import classes from './Cockpit.css'
const Cockpit = (props) => {
  let btnClass = '';
  if(props.showPersons)
  {
    btnClass = classes.Red
  }

  return (
    <div className = {classes.Cockpit}>
    <h1> Welcome</h1>
    <button className = {btnClass}
      onClick={props.clicked}>Show/Hide Data</button>
  </div>
  );
}

export default Cockpit
