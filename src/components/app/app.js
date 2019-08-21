import React, { Component }from 'react';
import './app.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoData : [
        this.createTodoItem('Check e-mail'),
        this.createTodoItem('Create Awesome React App'),
        this.createTodoItem('Get lunch')
      ],
      term: '',
      filter: 'all'
    };
  }

  maxId = 100;

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (removeId) => {
    this.setState( ({todoData}) => {
      const idx = todoData.findIndex(el => el.id === removeId);

      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr,
      }
    });
  };

  addItem = (label) => {
    this.setState( ({ todoData }) => {
      const newArr = todoData.slice();
      const newItem = this.createTodoItem(label);

      newArr.push(newItem);
      
      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(item => item.id === id);
    const oldItem = arr[idx];

    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };

    const newArr = [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];

    return newArr;
  }

  onToggleDone = (id) => {
    this.setState( ({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState( ({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  onSearchChange = (term) => { 
    this.setState({ term }); 
  };

  onFilterClick = (filter) => {
    this.setState({ filter });
  };

  search(items, term) {
    if (!term) {
      return items;
    }

    const searchArray = items.filter(item => item.label
        .toLowerCase().includes(term.toLowerCase()));

    return searchArray;
  }

  filter(arr, filter) {

    switch(filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter(item => {
          return !item.done; 
        }); 
      case 'done':
        return arr.filter(item => {
          return item.done; 
        });
      default:
        return arr;
    }

  }

  render() {
    const { todoData, term, filter } = this.state;
    const dones = todoData.filter(item => item.done);
    const todoCount = todoData.length - dones.length;
    const visibleItems = this.filter(
                        this.search(todoData, term), filter);


    return (
      <div className='todo-app'>
        <AppHeader todoCount={todoCount} dones={dones.length} />
        <div className='search-panel d-flex'>
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter filter={filter} onFilterClick={this.onFilterClick}/>
        </div>
        <TodoList todos={visibleItems} onDelete={this.deleteItem} 
                  onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant}/>
        <ItemAddForm onAdd={this.addItem}/>
      </div>
    );
  }
  
};