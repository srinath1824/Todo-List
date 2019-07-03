import React, { Component } from "react";
import { Table, Image } from "react-bootstrap";
import {connect} from 'react-redux';
import {deleteItem, editItem} from '../actions';
import AddItem from './AddItem';

class TableView extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      count: 0,
      editShow: false,
      singleItem: {}
    }
  }
  deletingItem(item){
    this.props.delete_Item(item);
  }
  editItem(item){
    this.setState({editShow: true});
    this.setState({singleItem: item});
    //this.props.editItem(item);
  }
  render() {
    const listItem = this.props.itemList.map(item => {
      return (
        <tr>
        <th>{item.id}</th>
        <th>{item.Workitem}</th>
        <th>{item.Duedate}</th>
        <th>{item.ResourceNeeded}</th>
        <th>
            <Image
              style={{ width: "30px", height: "30px" }}
              src="/images/edit.jpg"
              onClick={() => this.editItem(item)}
            />
            <Image
              style={{ width: "30px", height: "30px" }}
              src="/images/delete.jpg" 
              onClick={() => this.deletingItem(item)}
            />
        </th>
        </tr>
      );
    })
    return (
      <div>
        <Table style={{"width": "100%"}} striped bordered hover variant="dark">
          <thead>
            <tr>
              <th><h2><strong>ID</strong></h2></th>
              <th><h2><strong>WorkItem</strong></h2></th>
              <th><h2><strong>Due Date</strong></h2></th>
              <th><h2><strong>No. Resources Needed</strong></h2></th>
              <th><h2><strong>Actions</strong></h2></th>
            </tr>
          </thead>
          <tbody>
              {listItem}
          </tbody>
        </Table>
        {this.state.editShow ? <AddItem show={this.state.editShow} item={this.state.singleItem}/>: ""}
        </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    itemList: state.items
  }
  
}
const mapDispatchToProps = dispatch => ({
  delete_Item: (item) => dispatch(deleteItem(item)),
  edit_Item: (item) => dispatch(editItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableView);