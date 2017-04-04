import React, {Component} from 'react';

class OrderButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <button onClick={() => this.props.handleClick({name: this.props.name, price: this.props.price, key: Date.now()})}>{this.props.name} - ${this.props.price}</button>
    );
  }
}

export default OrderButton;
