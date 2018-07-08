import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'
import Radium, {StyleRoot} from  'radium'
//import Person2 from './Person/Person2'

class App extends Component {
state = {
  persons:[
    {id:"vbakdj" , name:"varun", age: 28},
    {id:"valkd" , name:"as", age: 23},
    {id:"vabk" , name:"vfd", age: 28}
  ],
  showPersons: true
}

switchHandler = (arg) => {
  //DO NOT DO THIS: this.state.persons[0].name = "Varun Varma"

  this.setState({
      persons:[
      {name:arg, age: 28},
      {name:"as", age: 23},
      {name:"vfd", age: 40}
    ]
  });
}

nameChangeHadler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p=>{
    return p.id === id
  });
const selPerson = {...this.state.persons[personIndex]}
selPerson.name = event.target.value;

const updPerson = [...this.state.persons]
updPerson[personIndex] = selPerson

  this.setState({persons: updPerson});
}


deleteHandler = (personIndex)=>{
  //const delPerson = this.state.persons.slice();
  const delPerson = [...this.state.persons];
  delPerson.splice(personIndex, 1)
  this.setState({persons:delPerson})
}


toggleBtnHandler = () =>{
  const doShow = this.state.showPersons
  this.setState({showPersons: !doShow})
}


  render() {
    const style = {
      backgroundColor:'green',
      textColor:'White',
      font:'inherit',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };


  let persons = null

  if(this.state.showPersons)
  {
    persons = (
      <div>
      {this.state.persons.map((person,index) => {
        return <Person click = {()=>this.deleteHandler(index)}
          name= {person.name}
          age= {person.age}
          key= {person.id}
          changed = {(event)=>this.nameChangeHadler(event,person.id)}/>
      })
    }
    </div>)

    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor :'salmon',
      color: 'white'
    }
  }

    return (
      <StyleRoot>
      <div className="App">
        <h1> Welcome</h1>

        <button onClick={this.switchHandler.bind(this,"hakumatata")} > Switch text </button>

        <button  style = {style} onClick={this.toggleBtnHandler}>Show/Hide Data</button>
        {persons}

      </div>
    </StyleRoot>
    );
  //  return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi my name is varun'))
  }
}

export default Radium(App);