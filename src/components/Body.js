import React, { Component } from "react";
import "./Body.css";
import { ButtonGroup, Button } from "react-bootstrap";
import TableView from "./Table";
import AddItem from "./AddItem";
import {addItems,toggleShow} from '../actions';
import {connect} from 'react-redux';

class Body extends Component {
  render() {
    return (
      <div>
        <div>
          <a
            style={{
              display: "inline-block",
              top: "8px",
              border: "3px solid blue",
              padding: "10px",
              textDecoration: "none"
            }}
            href="/"
          >
            The Workitem
          </a>
          <a
            style={{
              display: "inline-block",
              right: "30px",
              border: "3px solid blue",
              position: "absolute",
              padding: "10px",
              textDecoration: "none"
            }}
            href="/"
          >
            Number of work item:{this.props.itemList.length}
          </a>
        </div>
        <br />
        <div style={{ right: "30px", position: "absolute" }}>
          <ButtonGroup>
            <Button style={{ marginRight: "16px", borderRadius: "10px" }}>
              Upload to google spreadsheet
            </Button>
            <Button
              style={{ marginRight: "16px", borderRadius: "10px" }}
              onClick={this.props.toggle_state}
            >
              Add new Item
            </Button>
          </ButtonGroup>
        </div>
        <br />
        <br />
        <TableView />
        {this.props.showModel ? (
          <AddItem
            show={this.props.showModel}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    showModel: state.modalShow,
    itemList: state.items
  }
  
}

const mapDispatchToProps = dispatch => ({
  add_Item: (item) => dispatch(addItems(item)),
  toggle_state: () => dispatch(toggleShow())
});
export default connect(mapStateToProps, mapDispatchToProps)(Body);
