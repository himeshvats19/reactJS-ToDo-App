import React, { Component } from 'react'

class ListItems extends Component {
    createTasks = item => {
        return (
          <li key={item.key} disabled={item.done}>
            <input type="checkbox" checked={item.done} disabled={item.done} onChange={() => this.props.completeItem(item.key)} name={item.text}/>{item.text}
            <span className="created-info">Created On : {Date(item.key).toString()}</span>
            <button className="btn btn-danger del-btn" disabled={item.done} onClick={() => this.props.deleteItem(item.key)}>X</button>
          </li>
        ) 
      }
      deleteTask = item => {
        return (
          <li key={item.key}>{item.text}
           <span className="created-info">Deleted On : {Date(Date.now()).toString()}</span>
          </li>
        )
      }
      completeTask = item => {
        return (
          <li key={item.key}>{item.text}
           <span className="created-info">Completed On : {Date(Date.now()).toString()}</span>
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
    
    return <ul className="theList">{listItems}</ul>
  }
}
export default ListItems