import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false, 
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product implements OnInit {
  productId: string | null = '';

  selectedProduct: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id');

    let currentDB = JSON.parse(localStorage.getItem("dev_DB") ?? "[]");
    
    this.selectedProduct = currentDB.find((p: any) => p.id === this.productId);
  }

  addToCart(): void {
    if (this.selectedProduct) {
      let cartData = JSON.parse(localStorage.getItem("cart_DB") ?? "[]");
      cartData.push(this.selectedProduct);
      localStorage.setItem("cart_DB", JSON.stringify(cartData));
      alert(`${this.selectedProduct.name} hozzáadva a kosárhoz!`);
    }
  }
}