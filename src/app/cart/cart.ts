import { Component, OnInit } from '@angular/core';

// Ide is kell a lokális Product segédosztály strukturálása
class Product {
  id: string = '';
  name: string = '';
  category: string = '';
  price: number = 0;
  description: string = '';
  quantity: number = 0;
  availability: boolean = false;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartProducts: Product[] = [];

  constructor() {
    this.readCart();
  }

  ngOnInit(): void {}

  readCart(): void {
    let jsonArray = JSON.parse(localStorage.getItem("cart_DB") ?? "[]");
    this.cartProducts = Object.values(jsonArray).map(x => Object.assign(new Product(), x));
  }
}