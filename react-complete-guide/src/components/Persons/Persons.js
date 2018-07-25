import React,{Component} from 'react'

import Person from './Person/Person'
import './Person/Person.css'


class Persons extends Component{
  componentWillUnmount(){
    console.log("Persons.js inside un mount")
  }

  componentWillReceiveProps(nextProps)
  {
    console.log('[Update Persons.js] inside componentWillRecieveUpdate')
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[update Persons.js] inside shouldComponentUpdate',nextState)
    return nextProps.persons !== this.props.persons
  }

  componentWillUpdate(nextProps, nextState)
  {
    console.log('[Update Persons.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate()
  {
    console.log('[Update Persons.js] inside componentDidUpdate')
  }
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
