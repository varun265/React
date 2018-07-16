import React,{Component} from 'react'

import Person from './Person/Person'
import './Person/Person.css'


class Persons extends Component{
  render(){
    return this.props.persons.map((person,index) => {
    return  <Person click = {() =>this.props.clicked(index)}
      name= {person.name}
      age= {person.age}
      key= {person.id}
      changed = {(event)=>this.props.change(event,person.id)} />
    });
  }
}
export default Persons;
