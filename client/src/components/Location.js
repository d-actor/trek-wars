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
    let id = this.props.location.id
    axios.put(`/api/locations/${id}`, { location: { name: this.state.name } })
      .then( res => {
        console.log("yep")
        this.setState({name: res.data.name})
        this.toggleEdit();
      })
      .catch( res => {
        console.log("nope")
        console.log(res)
      });
  }

  deleteLocation = () => {
    let id = this.props.location.id
    axios.delete(`api/locations/${id}/`)
    .then( res => {
      this.toggleEdit();
      // wrong way first
      this.props.resetLocations(id)
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
          <Button onClick={ this.cancelEdit }>Cancel</Button>
          <Button primary onClick={ this.editLocation }>Save</Button>
          <Button color="red" onClick={ this.deleteLocation }>Delete</Button>
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
