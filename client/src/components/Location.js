import React, { Component } from 'react';
import axios from 'axios';
import { List, Button, Input } from 'semantic-ui-react';

class Location extends Component {
  state = { editing: false, name: this.props.location.name };

  toggleEdit = () => {
    if(this.editing)
      this.setState({ name: this.props.location.name});
      this.setState({ editing: !this.state.editing });
  }

  editLocation = () => {
    // figure out how to get the update name of the location
    let id = this.props.location.id
    axios.put(`/api/locations/${id}`, { location: { name: this.state.name } })
      .then( res => {
        this.setState({name: res.data.name})
        this.toggleEdit();
      })
      .catch( res => {
        console.log(res)
      });
  }

  deleteLocation = () => {
    let id = this.props.location.id
    axios.delete(`api/locations/${id}/`)
    .then( res => {
      console.log('done')
      this.setState();
      this.toggleEdit();
    })
    .catch( res => {
      console.log("Didn't work")
    })
  }

  cancelEdit = () => {
    this.setState({editing: false, name: this.props.location.name})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value});
  }

  render() {
    if(this.state.editing)
      return(
        <List.Item>
          <Input type='text' defaultValue={this.state.name} onChange={this.handleChange} />
          <Button onClick={ this.toggleEdit }>Cancel</Button>
          <Button primary onClick={ this.editCharacter }>Save</Button>
          <Button color="red" onClick={ this.deleteCharacter }>Delete</Button>
        </List.Item>
      );
    else
      return(
        <List.Item onClick={ this.toggleEdit }>
          {this.state.name}
        </List.Item>
      );
  }

}

export default Location;
