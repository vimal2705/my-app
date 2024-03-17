import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.modal';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  isLoading = true;
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/products') // Accept any response type
      .subscribe({
        next: (data) => {
          // Check for different response structures
          if (data.products) {
            
            this.products = data.products; // Access products if the property exists
          } else {
            this.products = []; // Assign entire response if no 'products' property
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
          this.isLoading = false;
        }
      });
  }
}
