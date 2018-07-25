import React,{Component} from 'react'
import PropType from 'prop-types'
import withClassExt from '../../../hoc/withClassExt'
import Aux from '../../../hoc/Aux'
import classes from './Person.css';
import {Autheticated} from '../../../container/App'
class Person extends Component{
	render(){
		return(
			<Aux>
				<Autheticated.Consumer>
					{auth =>auth ? <p>I am Authenticated</p> : null}
			</Autheticated.Consumer>
			<p onClick={this.props.click}>Hello! My name is {this.props.name} and my age is {this.props.age}</p>
	    <p>{this.props.children}</p>
	    <input type ="text" onChange={this.props.changed} value = {this.props.name}/>
	  </Aux>)
	}
}

Person.propTypes ={
	click: PropType.func,
	age: PropType.number,
	name: PropType.string,
	onChange: PropType.func
}


export default withClassExt(Person,classes.Person);
