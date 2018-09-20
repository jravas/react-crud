import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { fetchItems } from '../redux/actions';

class ItemsList extends Component {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    const { items } = this.props;
    return !items.length ? null : (
      <ListGroup>
        {items.map(item => (
          <ListGroupItem key={item.id}>{item.name}</ListGroupItem>
        ))}
      </ListGroup>
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
