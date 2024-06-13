import createItem from "./services/item.js";
import * as cartService from './services/cart.js';

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Notebook Asus", 2599.59, 1);
const item2 = await createItem("Mouse sem fio", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart);
