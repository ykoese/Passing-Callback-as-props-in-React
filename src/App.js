import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetInput from './GetInput/GetInput';
import RenderInput from './RenderInput/RenderInput';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      inputValue: ''
    }
    this.handleChange= this.handleChange.bind(this)
  }
 handleChange(event){
  this.setState({
    inputValue:event.target.value
  })
 }
 render() {
  return (
    <div>
      <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
      <RenderInput input={this.state.inputValue}/>
        
    </div>
  );
 }
}

export default App;
