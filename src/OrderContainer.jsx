import React, {Component} from 'react';
import Order from './Order.jsx';
import CheckoutButton from './CheckoutButton.jsx';

class OrderContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section>
        {this.props.cart.map((item) => <p key={item.key}>{item.name} - ${item.price}</p>)} 
        <div>
          <strong>TOTAL: ${this.props.cart.reduce((total, item) => item.price + total, 0)}</strong><br />
        </div>
        <CheckoutButton handleClick={this.props.checkoutBtn} />
      </section>
    );
  }
}

export default OrderContainer;
