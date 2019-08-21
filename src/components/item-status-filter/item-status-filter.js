import React, { Component } from 'react';
import './item-status-filter.css';

const buttonsData = [
  {name: 'all', label: 'All'}, 
  {name: 'active', label: 'Active'}, 
  {name: 'done', label: 'Done'}
];

export default class ItemStatusFilter extends Component {


  render() {
    const { filter, onFilterClick } = this.props;

    const buttons = buttonsData.map(({ name, label }) => {
      const className = name === filter ? 'btn btn-primary' : 'btn btn-outline-secondary';

      return (
        <button type="button" key={name}
          className={className} onClick={() => onFilterClick(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  };
};