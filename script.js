// // Importing Module
import {
  addToCart,
  totalPrice as price,
  totalPrice,
  tq,
} from './shoppingCart.js';
// // // console.log(shoppingCost);
addToCart('pizza', 2);
// // console.log(price, tq);
// // import * as ShoppingCart from './shoppingCart.js';
// // console.log('Importing Module');

// // console.log(ShoppingCart);
// // ShoppingCart.addToCart('pizza', 3);
// import add, {
//   addToCart,
//   totalPrice as price,
//   totalPrice,
//   tq,
// } from './shoppingCart.js';
// add('hamburger', 1);
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
// shoppingCart2.addToCart('pizza', 4);
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { prodcut: 'bread', quantity: 5 },
    { prodcut: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true, ID: 1362901598, fName: 'Mehran' },
};
const stateCloned = Object.assign({}, state);
const state2 = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateCloned);
console.log(state2);
console.log('Hello222');
console.log('Hello32');

// hot module replacement
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('jonas');
console.log('Mehran' ?? null);
const cart = [
  { prodcut: 'bread', quantity: 5 },
  { prodcut: 'pizza', quantity: 2 },
  { prodcut: 'bread', quantity: 5 },
  { prodcut: 'pizza', quantity: 2 },
  { prodcut: 'bread', quantity: 5 },
  { prodcut: 'pizza', quantity: 2 },
  { prodcut: 'bread', quantity: 5 },
  { prodcut: 'pizza', quantity: 2 },
  { prodcut: 'bread', quantity: 5 },
  { prodcut: 'pizza', quantity: 2 },
  { prodcut: 'bread', quantity: 5 },
  { prodcut: 'pizza', quantity: 2 },
];
console.log(cart.filter(el => el.quantity > 3));
