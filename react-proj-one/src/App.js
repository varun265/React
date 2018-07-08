import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsrInput from './UserInput/UserInput'
import UsrOutput from './UserOutput/UserOutput'
import './UserInput/UserInput.css'
class App extends Component {



  state={
    username:[
      {name:'hakunamatatah'}
    ]
  }
nameChangeHandler = (arg)=>{
    this.setState({
    username:[
      {name:arg}
    ]
  })
}

textChange = (event)=>{
  this.setState({
    username:[
      {name:event.target.value}
    ]
  })
}

  render() {
    
    return (
      <div className="App">
        <UsrInput change={this.textChange} name={this.state.username[0].name} />
        <UsrOutput
          name={this.state.username[0].name} changed={()=>{this.nameChangeHandler('pumba')}} />

      </div>
    );
  }
}

export default App;
