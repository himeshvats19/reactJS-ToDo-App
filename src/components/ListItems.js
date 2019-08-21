import React, { Component } from 'react'

class ListItems extends Component {
    createTasks = item => {
      let options = { dateStyle: 'short',  timeStyle: 'short' };
        return (
          <li key={item.key} disabled={item.done} className="list-group-item">
              <span>{item.text}</span>
            <span className="created-info">{new Date(item.key).toLocaleDateString('en-us', options)}</span>
            <button className="btn btn-outline-danger btn-sm del-btn" disabled={item.done} onClick={() => this.props.deleteItem(item.key)}>Delete</button>
            <button className="btn btn-outline-success btn-sm done-btn" disabled={item.done} onClick={() => this.props.completeItem(item.key)}>Done</button>
          </li>
        ) 
      }
      deleteTask = item => {
        let options = { dateStyle: 'short',  timeStyle: 'short' };
        return (
          <li key={item.key} className="list-group-item list-group-item-danger">{item.text}
           <span className="created-info">{new Date(Date.now()).toLocaleDateString('en-us', options)}</span>
          </li>
        )
      }
      completeTask = item => {
        let options = { dateStyle: 'short',  timeStyle: 'short' };
        return (
          <li key={item.key} className="list-group-item list-group-item-success">{item.text}
           <span className="created-info">{new Date(Date.now()).toLocaleDateString('en-us', options)}</span>
          </li>
        )
      }
      
  render() {
    const todoEntries = this.props.entries;
    const todoDeleted = this.props.deleted;
    const todoCompleted = this.props.completed;
    let listItems;
    if(this.props.trashPage){
      listItems = todoDeleted.map(this.deleteTask)
    }
    else if(this.props.completePage){
      listItems = todoCompleted.map(this.completeTask)
    }
    else{
      listItems = todoEntries.map(this.createTasks)
    }
    
    return <ul className="theList list-group">{listItems}</ul>
  }
}
export default ListItems