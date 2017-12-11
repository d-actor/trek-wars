import React, { Component } from 'react';
import StarTrekLogo from '../images/star-trek-logo.gif';
import axios from 'axios';
import { Grid, List } from 'semantic-ui-react';
import Character from './Character';
import Location from './Location';

class Startrek extends Component {
  state ={ characters: [], locations: [] };

  componentDidMount() {
    axios.get('/api/characters?nerd_type=startrek')
      .then( res => {
        this.setState({ characters: res.data })
      })
      .catch( res => {
        console.log(res.data);
      });
    axios.get('/api/locations?nerd_type=startrek')
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
    })
  }


  render() {
    return(
      <div>
        <h1>Star Trek</h1>
        <img style={styles.logo} src={StarTrekLogo} alt='Star Trek Logo' />
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
    width: '100px',
  }
}

export default Startrek;
