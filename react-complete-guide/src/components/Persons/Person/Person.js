import React,{Component} from 'react'

import classes from './Person.css';

class Person extends Component{
	render(){
		return(<div className = {classes.Person} >
			<p onClick={this.props.click}>Hello! My name is {this.props.name} and my age is {this.props.age}</p>
	    <p>{this.props.children}</p>
	    <input type ="text" onChange={this.props.changed} value = {this.props.name}/>
	  </div>)
	}
}




export default Person;
