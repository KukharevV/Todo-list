import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.label) {
      return;
    }
    
    this.props.onAdd(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className='bottom-panel d-flex' 
            onSubmit={(e) => this.onSubmit(e)}>
        <input type='text' className='form-control new-todo-label'
               placeholder='New Todo' value={this.state.label}
               onChange={(e) => this.onLabelChange(e)}></input>
        <button type='submit'
                className='btn btn-outline-secondary'
        >Add</button>
      </form>
    );
  };
};