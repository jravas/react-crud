import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    addItem(item);
    // clear input
    this.setState({ item: '' });
  };

  render() {
    const { item } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          value={item}
          onChange={this.handleInput}
        />
        <button type="button" onClick={this.itemSubmit}>
          Add
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addItem }
)(ItemAdd);
