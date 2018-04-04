import React, { Component } from "react";
// import { Line } from 'rc-progress';
import Wrapper from "./components/Wrapper";
import Card from './components/cards/Card';
import Characters from './characters.json';
// import image from '/assets/images'
import logo from "./assets/favicon.png";
import './App.css';

let topScore = 0;
let guessesCorrect = 0;
let message = "";

class App extends Component {


  state = {
    Characters,
    topScore,
    guessesCorrect,
    message,

  };

  setClicked = id => {
    const Characters = this.state.Characters;
    const cardClicked = Characters.filter(Character => Character.id === id);

    if (cardClicked[0].clicked) {

      guessesCorrect = 0;
      message = 'Start over';


      for (let i = 0; i < Characters.length; i++) {
        Characters[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ guessesCorrect });
      this.setState({ Characters });

    } else {
      cardClicked[0].clicked = true;

      guessesCorrect = guessesCorrect + 4;
      message = "Good Job!"

      if (guessesCorrect > topScore) {
        topScore = guessesCorrect;
        this.setState({ topScore });

      }

      Characters.sort((a, b) => {
        return 0.5 - Math.random();
      });

      this.setState({ Characters });
      this.setState({ guessesCorrect });
      this.setState({ message });
    }
  };




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REACT: Click Game</h1>
        </header>


        <Wrapper>


          <div className="hero">
            <div className="buttonWrapper">
            </div>

          </div>


          <div className="row">
            {this.state.Characters.map(Character => (
              console.log(Character.image),
              <Card
                setClicked={this.setClicked}
                id={Character.id}
                key={Character.id}
                image={Character.image}
                name={Character.name}
                className="col-sm-1"

              />
            ))}
          </div>
        </Wrapper>
        );


        <div className="cardHolder">

        </div>
      </div>
    );
  }
}



export default App;
