import { Component, OnInit } from '@angular/core';
import { Service, Product } from '../service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List implements OnInit {
  products: Product[] = [];

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  read(): void {
  
    this.products = this.service.getProducts();
  }

  sortAscending(): void {
    this.products.sort((a, b) => a.price - b.price);
  }

  sortDescending(): void {
    this.products.sort((a, b) => b.price - a.price);
  }

  filterAvailable(): void {
    this.products = this.service.getProducts().filter(p => p.availability && p.quantity > 0);
  }

  addToCart(product: Product): void {
    let cartData = JSON.parse(localStorage.getItem("cart_DB") ?? "[]");
    cartData.push(product);
    localStorage.setItem("cart_DB", JSON.stringify(cartData));
    alert(`${product.name} kosárba került!`);
  }
}