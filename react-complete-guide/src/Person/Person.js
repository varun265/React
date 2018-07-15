import React from 'react'

import classes from './Person.css';

const person = (props) => {

	const radn = Math.random();
	if(radn < 0.7)
	{
		throw new Error("Something is wrong.")
	}
  return(<div className = {classes.Person} >


    <p onClick={props.click}>Hello! My name is {props.name} and my age is {props.age}</p>
    <p>{props.children}</p>
    <input type ="text" onChange={props.changed} value = {props.name}/>
  </div>)
};



export default person
