import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Service, Product } from '../service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- Itt importáld a CommonModule-t
  templateUrl: './product.html'
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private service: Service) {}

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.service.getProductById(id);
    }
  }

  addToCart(): void {
    if (this.product) {
   
      let cart = JSON.parse(localStorage.getItem("cart_DB") ?? "[]");
      cart.push(this.product);
      localStorage.setItem("cart_DB", JSON.stringify(cart));
      alert("Termék a kosárban!");
    }
  }
}

export { Product };
