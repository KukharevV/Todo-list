import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render () {
    const {label, done, important, onDelete, onToggleDone, onToggleImportant} = this.props;
    let className = 'todo-list-item';
    if (done) {
      className += ' done';
    }

    if (important) {
      className += ' important';
    }
  
    return (
      <span className={className}>
        <span className='todo-list-item-label'
              onClick={onToggleDone}
        >
          {label}
        </span>

        <button type='button' className='btn btn-outline-success btn-sm float-right' onClick={onToggleImportant}>
          <i className='fas fa-exclamation'></i>
        </button>

        <button type='button' className='btn btn-outline-danger btn-sm float-right' onClick={onDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>

      </span>
    );
  };
}