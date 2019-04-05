import React, { Component } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Header from './components/Header';
import IncrediblesCard from './components/IncrediblesCard';
import incredibles from './incredibles.json';
import './styles/App.css';
import Footer from './components/Footer';

const sortImages = imagesArray => imagesArray.sort(() => Math.random() - 0.5);

class App extends Component {

  state = {
    incredibles: sortImages(incredibles),
    score: 0,
    highScore: 0,
    clickedImages: []
  }

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore);
      });
    }
    this.state.incredibles.forEach(incredible => {
      incredible.count = 0;
    });
    if (this.state.score === 12) {
      alert("Awesome Job! You won The Game :)");
      this.setState({ score: 0 });
      return true;
    } else {
      alert(`Game Over :( \nscore: ${this.state.score}\nYou clicked an image already clicked \nTry again`);
      this.setState({ score: 0 });
      return true;
    }

  }

  clickCount = id => {
    // eslint-disable-next-line
    this.state.incredibles.find((o, i) => {

      if (o.id === id) {
        if (incredibles[i].count === 0) {
          incredibles[i].count = incredibles[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.incredibles.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    const incrediblesUrl = this.state.incredibles.map(incredible => {
      return (
        <div className="col-md-3">

          <IncrediblesCard
            urlImage={incredible.image}
            clickCount={this.clickCount}
            id={incredible.id}
            key={incredible.id}
          />
        </div>
      )
    })
    return (
      <div className="App">
        <Background />
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          onClick={this.refreshPage}
        />
        <Header />
        <div className="container cardBox">
          <div className="row">
            {incrediblesUrl}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
