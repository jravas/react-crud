import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup, Button, Input, Row, Col } from 'reactstrap';
import { addItem } from '../redux/actions';

class ItemAdd extends Component {
  state = { item: '' };

  // set item state value to input value
  handleInput = event => {
    this.setState({ item: event.target.value });
  };
  // passing item to redux
  itemSubmit = () => {
    const { item } = this.state;
    const { addItem } = this.props;
    if (item.length) {
      // add item
      addItem(item);
      // clear input
      this.setState({ item: '' });
    }
  };

  render() {
    const { item } = this.state;
    return (
      <form>
        <Row>
          <Col md="10">
            <InputGroup>
              <Input
                type="text"
                name="name"
                value={item}
                onChange={this.handleInput}
              />
            </InputGroup>
          </Col>
          <br />
          <Col>
            <Button block type="button" onClick={this.itemSubmit}>
              Add
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default connect(
  null,
  { addItem }
)(ItemAdd);
