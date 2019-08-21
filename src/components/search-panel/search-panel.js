import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    }
  }

  searchValueChange = (e) => {
    this.setState({
      label: e.target.value
    })

    this.props.onSearchChange(e.target.value);
  }
  
  render() {
    return (
      <input className='form-control search-input' type='text' placeholder='Filter Todos' 
      onChange={(e) => this.searchValueChange(e)} value={this.state.label}></input>
    );
  };
};