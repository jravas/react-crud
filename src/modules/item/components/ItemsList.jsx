import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import { fetchItems, deleteItem } from '../redux/actions';

class ItemsList extends Component {
  // delete item
  deleteItem = item => {
    const { deleteItem } = this.props;
    deleteItem(item);
  };

  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    const { items } = this.props;
    return !items.length ? null : (
      <ListGroup>
        {items.map(item => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col md="11">
                <Link to={`item/${item.id}`}>{item.name}</Link>
              </Col>
              <Col md="1">
                <Button
                  type="button"
                  onClick={this.deleteItem.bind(this, item)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
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
  { fetchItems, deleteItem }
)(ItemsList);
