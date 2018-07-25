import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'
const Cockpit = (props) => {
  let btnClass = classes.Button
  if(props.showPersons)
  {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  return (
    <Aux >
    <h1> Welcome</h1>
    <button className = {btnClass}
      onClick={props.clicked}>Show/Hide Data</button>
    <button onClick={props.isLogin}> Login</button>
  </Aux>
  );
}

export default Cockpit
