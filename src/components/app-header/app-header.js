import React from 'react';
import './app-header.css';


const AppHeader = ({ todoCount, dones }) => {
  return (
    <div className='app-header d-flex'>
      <h1>Todo List</h1>
      <h2>{todoCount} more to do, {dones} done</h2>
    </div>
    );
};

export default AppHeader;