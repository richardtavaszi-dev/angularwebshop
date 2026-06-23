import { Component, OnInit } from '@angular/core';
import { Service, Product } from '../service';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.html',
  styleUrls: ['./delete.css']
})
export class Delete implements OnInit {
  isLoggedIn = false;
  products: Product[] = [];
  selectedIds: string[] = []; // Ide gyűjtjük a törlendő ID-kat

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("admin_logged") === "true";
    this.products = this.service.getProducts();
  }

  // Checkbox állapotának figyelése
  toggleSelection(id: string, event: any): void {
    if (event.target.checked) {
      this.selectedIds.push(id);
    } else {
      this.selectedIds = this.selectedIds.filter(item => item !== id);
    }
  }

  // Tömeges törlés
  deleteSelected(): void {
    this.selectedIds.forEach(id => {
      // Itt hívhatsz egy új metódust a Service-ben
      this.service.removeProduct(id);
    });
    this.selectedIds = [];
    this.products = this.service.getProducts(); // Frissítjük a nézetet
    alert("Kijelölt termékek törölve!");
  }
}