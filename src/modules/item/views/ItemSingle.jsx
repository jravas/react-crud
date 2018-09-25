import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input, Button, Row, Col } from 'reactstrap';
import { fetchItem, updateItem } from '../redux/actions';

class ItemSingle extends Component {
  state = { name: '' };

  // set item state value to input value
  handleInput = event => {
    this.setState({ name: event.target.value });
  };

  // submit input changes
  handleSubmit = () => {
    const { name } = this.state;
    const { updateItem } = this.props;
    const { id } = this.props.match.params;

    updateItem(id, name);
  };

  componentDidMount() {
    const { fetchItem } = this.props;
    const { id } = this.props.match.params;
    const { name } = this.props.item;

    fetchItem(id);
    this.setState({ name: name });
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props.item;

    if (prevProps.item.name !== this.props.item.name) {
      this.setState({ name: name });
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <Row>
          <Col>
            <InputGroup>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInput}
              />
            </InputGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button onClick={this.handleSubmit} className="float-right">
              Update
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.itemsState.item
});

export default connect(
  mapStateToProps,
  { fetchItem, updateItem }
)(ItemSingle);
