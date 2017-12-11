import React, { Component } from 'react';
import StarWarsLogo from '../images/star-wars-logo.png';
import axios from 'axios';
import { Grid, List } from 'semantic-ui-react';
import Character from './Character';
import Location from './Location';

class Starwars extends Component {
  state = { characters: [], locations: [] };

  // lifecycle method
  componentDidMount() {
    axios.get('/api/characters?nerd_type=starwars')
      .then( res => {
        this.setState({ characters: res.data })
      })
      .catch( res => {
        console.log(res.data);
    });
    axios.get('/api/locations?nerd_type=starwars')
      .then( res => {
        this.setState({ locations: res.data })
      })
      .catch( res => {
        console.log(res.data)
      });
  }

  displayCharacters = () => {
    return this.state.characters.map( character => {
      return(<Character key={character.id} character={character} />);
    });
  }

  displayLocations = () => {
    return this.state.locations.map( location => {
      return(<Location key={location.id} location={location} />);
    });
  }

  render() {
    return(
      <div>
        <h1>Star Wars</h1>
        <img style={styles.logo} src={StarWarsLogo} alt='StarWars Logo' />
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h1>Characters</h1>
              <List bulleted>
                { this.displayCharacters() }
              </List>
            </Grid.Column>

            <Grid.Column width={8}>
              <h1>Locations</h1>
              <List bulleted>
                { this.displayLocations() }
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const styles = {
  logo: {
    width: '250px',
  }
}

export default Starwars;
