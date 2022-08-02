// // Exporting Module
// console.log('Exporting Module');
// const shoppingCost = 10;
// const cart = [];
// // console.log(shoppingCost);
// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart. `);
// };
// const totalPrice = 140;
// const totalQuantity = 3;
// export { totalPrice, totalQuantity as tq, cart };
// export default function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart. `);
// }
/////////////////////////////////////////// my explanation
console.log('Exporting Module');
export const shoppingCart = 10;
const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 440;
const totalQuantity = 4;
export { totalPrice, totalQuantity as tq };
// export default function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// }
