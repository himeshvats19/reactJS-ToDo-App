import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './components/Home';
import Create from './components/Create'
import Trash from './components/Trash'
import Complete from './components/Completed'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
      deletedItems:[],
      completedItems:[]
    }
    
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      // console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
      
     
    }
  }
  deleteItem = key => {
    const deletedItem = this.state.items.find((el) => {
        return el.key === key
    });
    const deletedItems = [...this.state.deletedItems, deletedItem];

    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
   
    this.setState({
      items: filteredItems,
      deletedItems:deletedItems
    })
  }

  completeItem = key => {
    const completedItem = this.state.items.find((el) => {
        if(el.key === key){
          el.done = true;
          return el;
        }
        return;
    });
  

    this.setState({
      completedItems:[...this.state.completedItems, completedItem]
    })
  }

  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                <h5>Tasks</h5>
                <Create 
                  addItem={this.addItem} 
                  inputElement={this.inputElement} 
                  handleInput={this.handleInput} 
                  currentItem={this.state.currentItem}/>
                <Home 
                  entries={this.state.items} 
                  deleteItem={this.deleteItem}
                  completeItem={this.completeItem} />
                </div>
            </div>
          </div>
          <div className="col-sm">
          <div className="card">
              <div className="card-body">
              <h5>Done</h5>
              <Complete 
                completedItems={this.state.completedItems}/>
          </div>
            </div>
          </div>
          <div className="col-sm">
          <div className="card">
              <div className="card-body">
              <h5>Deleted</h5>
              <Trash 
                deletedItems={this.state.deletedItems}/>
                </div>
            </div>
          </div>
          </div>
      </div>
    )
  }
}
export default App