import React, {Component} from 'react';
import OrderContainer from './OrderContainer.jsx';
import OrderButton from './OrderButton.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: [{name: "Hot Dog", price: 5}, {name: "Fries", price: 2}, {name: "Pop", price: 1}],
      order: []
    };
    this.addItem = this.addItem.bind(this);
    this.checkout = this.checkout.bind(this);
  }
  addItem(item) {
    let newlist = this.state.order;
    newlist.push(item);
    this.setState({order: newlist}); 
  }
  checkout() {
    this.setState({order: []});
  }
  render() {
    return (
      <main>
        <h1>POS POS</h1>
        <div id="buttons">
          {this.state.menu.map((item) => <OrderButton key={item.name} name={item.name} price={item.price} handleClick={this.addItem} />)}
        </div>
        <OrderContainer cart={this.state.order} checkoutBtn={this.checkout} />
         
      </main> 
    );
  }
}
export default App;
