import React, { Component } from 'react';
import DisplayEmployee from './DisplayEmployee';
import GenerateEmployee from './GenerateEmployee';
import './App.css';

const  sampleEmployee = {
  "quote": "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
  "character": "Homer Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  "characterDirection": "Right"
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
    };
  }

  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <GenerateEmployee selectEmployee={() => this.getEmployee()} />
        <DisplayEmployee employee={this.state.employee} />
      </div>
    );
  }
}

export default App;
