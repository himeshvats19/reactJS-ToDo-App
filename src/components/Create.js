import React from 'react'
import TodoList from '../TodoList'
class Create extends React.Component {
  render() {
    return <div>
      <h2>Add New Task</h2>
        {/* {console.log(this.props)} */}
        <TodoList
          addItem={this.props.addItem}
          inputElement={this.props.inputElement}
          handleInput={this.props.handleInput}
          currentItem={this.props.currentItem}
        />
        </div>
  }
}
export default Create