import React from 'react'
import ListItems from './ListItems'
class Home extends React.Component {
  render() {
    let list;
    if(this.props.entries.length > 0){
      list = <ListItems entries={this.props.entries} completeItem={this.props.completeItem} deleteItem={this.props.deleteItem}/>
    }
    else{
      list = <span className="emptylist">Empty List</span>
    }
    return <div className="todoListhome">
        {/* {console.log(this.props)} */}
        {list}
        </div>
  }
}
export default Home