import React from 'react'
import ListItems from './ListItems';
class Completed extends React.Component {
  render() {
    let list;
    if(this.props.completedItems.length > 0){
      list = <ListItems completed={this.props.completedItems} completePage="true"/>
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
export default Completed