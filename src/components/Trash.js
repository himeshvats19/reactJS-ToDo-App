import React from 'react'
import ListItems from './ListItems';
class Trash extends React.Component {
  render() {
    let list;
    if(this.props.deletedItems.length > 0){
      list = <ListItems deleted={this.props.deletedItems} trashPage="true"/>
    }
    else{
      list = <span className="emptylist">Empty List</span>
    }
    return <div className="todoListhome">
       <h2>Trash(Deleted Tasks)</h2>
        {list}
        </div>
  }
}
export default Trash