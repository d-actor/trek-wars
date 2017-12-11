import React, { Component } from 'react';
import Starwars from './components/Starwars';
import Startrek from './components/Startrek';

class App extends Component {
  state = { starwars: true };

  toggleNerds = () => {
    this.setState({ starwars: !this.state.starwars});
  }

  render() {
    if(this.state.starwars)
      return(
        <div>
          <button onClick={ this.toggleNerds }>Toggle Star Trek</button>
          <Starwars />
        </div>
      );
    else
      return(
        <div>
          <button onClick={ this.toggleNerds }>Toggle Star Wars</button>
          <Startrek />
        </div>
      );
  }
}

export default App;
