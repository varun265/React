import React, { Component } from 'react';
import classes from './App.css';
import '../components/Persons/Person/Person.css'
import Cockpit from '../components/Cockpit/Cockpit'
import withClassExt from '../hoc/withClassExt'
import Aux from '../hoc/Aux'


import Persons from '../components/Persons/Persons'

export const Autheticated = React.createContext(false);

class App extends Component {
  constructor(props){
    super(props)
    console.log("[App.js] inside constructor",props)
  }

  componentWillMount(){
    console.log("[app.js] componentwillmount")
  }

  componentDidMount(){
    console.log("app.js componentdidMount")
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[update App.js] inside shouldComponentUpdate',nextState)
    return true
  }

  componentWillUpdate(nextProps, nextState)
  {
    console.log('[Update App.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate()
  {
    console.log('[Update App.js] inside componentDidUpdate')
  }


state = {
  persons:[
    {id:"vbakdj" , name:"Varun", age: 28},
    {id:"valkd" , name:"as", age: 23},
    {id:"vabk" , name:"vfd", age: 28}
  ],
  showPersons: true,
  toggleHandler: 0,
  authenticated:false
}

switchHandler = (arg) => {
  //DO NOT DO THIS: this.state.persons[0].name = "Varun Varma"

  this.setState({
      persons:[
      {name:arg, age: '28'},
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
  this.setState((prevState, props) =>{
    return {
      showPersons: !doShow,
      toggleHandler: prevState.toggleHandler + 1
    }
  });
}
loginHandler = ()  =>{
  this.setState({authenticated:true})
}

  render() {
    console.log("app.js inside render")
  let persons = null



  if(this.state.showPersons)
  {
    persons = (
      <div>
        <Persons
          persons = {this.state.persons}
          clicked = {this.deleteHandler}
          change = {this.nameChangeHadler}
          />
      </div>)

  }

    return (

      <Aux>
        <Cockpit showPersons = {this.state.showPersons}
          clicked = {this.toggleBtnHandler}
          isLogin = {this.loginHandler}
        />

      <Autheticated.Provider value={this.state.authenticated}>
        {persons}
      </Autheticated.Provider>
      </Aux>

    );
  //  return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi my name is varun'))
  }
}

export default withClassExt(App, classes.App);
