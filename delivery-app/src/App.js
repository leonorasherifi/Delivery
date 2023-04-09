
import { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(res =>{
      if(res.data){
        console.log(res.data)
      }
    });
  }

  render(){  
    return (
      <div className="App">
        <h1>Delivery app...</h1>
      </div>
    );
  }
}


export default App;
