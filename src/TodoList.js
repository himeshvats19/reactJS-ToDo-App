import React, { Component } from 'react'
class TodoList extends Component {
  componentDidUpdate() {
      if( this.props.inputElement){
        this.props.inputElement.current.focus()
      }
   
  }
  render() {
    return (
          <form onSubmit={this.props.addItem}>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Task"
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit"> Add Task</button>
                </div>
            </div>
          </form>
    )
  }
}
export default TodoList