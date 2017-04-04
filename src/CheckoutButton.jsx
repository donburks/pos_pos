import React, {Component} from 'react';

class CheckoutButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <button onClick={this.props.handleClick}>Checkout</button>
    );
  }
}

export default CheckoutButton;
