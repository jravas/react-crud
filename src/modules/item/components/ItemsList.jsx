import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../redux/actions';

class ItemsList extends Component {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    const { items } = this.props;
    return !items.length ? null : (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state.itemsState.items
});

export default connect(
  mapStateToProps,
  { fetchItems }
)(ItemsList);
