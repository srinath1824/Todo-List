import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {toggleShow, addItems} from '../actions';

class AddItem extends Component {
  constructor(){
    super();
    this.state={}
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let dataObject = {
      id: this.props.itemList.length + 1,
      Workitem: data.get('Workitem'),
      Duedate: data.get('Duedate'),
      ResourceNeeded: data.get('ResourceNeeded')
    }
    this.props.add_to_list(dataObject);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.toggleState}>
        <Modal.Title>Add Items to List</Modal.Title>
        <Modal.Header />
        <Modal.Body>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label className="col-form-label">Workitem:</label>
            <input name="Workitem" type="text" value={undefined === this.props.item.Workitem ? "" : this.props.item.Workitem} className="form-control" id="Workitem"></input>
          </div>
          <div className="form-group">
            <label className="col-form-label">Due Date:</label>
            <input name="Duedate" type="date" value={undefined === this.props.item.Duedate? "" :this.props.item.Duedate} className="form-control" id="Duedate"></input>
          </div>
          <div className="form-group">
            <label className="col-form-label">Resources needed:</label>
            <input name="ResourceNeeded" type="text" value={undefined === this.props.item.ResourceNeeded? "" :this.props.item.ResourceNeeded} className="form-control" id="ResourceNeeded"></input>
          </div>
          <Button type="submit">SUBMIT</Button>
        </form>
        </ Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggle_state}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModel: state.modalShow,
    itemList: state.items
  }
  
}

const mapDispatchToProps = dispatch => ({
  toggle_state: (show) => dispatch(toggleShow(show)),
  add_to_list: (item) => dispatch(addItems(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
