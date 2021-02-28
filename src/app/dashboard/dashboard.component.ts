import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { DashboardService } from '../services/dashboard.service';
import product_data from '../json/product.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  getProducts: any[];
  filteredProduct = new Array();
  value = "asc";
  showSizes: boolean = false;
  itemSize: any;
  productAdded = false;
  selectedProduct = new Array();
  addedCount: number;
  counter: number;

  constructor(
    private dashboardService: DashboardService

  ) { }

  ngOnInit() {
    this.getProduct();
    this.ascending();
  }

  getProduct() {
    //this.dashboardService.getProduct();
    this.getProducts = product_data;
  }

  filterProduct(tag){
    this.getProducts = product_data;
    this.filteredProduct = [];
    if(tag !== 'All Products'){
      for(let i= 0; i < this.getProducts.length ; i++){
        if(tag === this.getProducts[i].tag){
          this.filteredProduct.push(this.getProducts[i]);
        }
      }
      this.getProducts = [];
      this.getProducts = this.filteredProduct;
    }
    else {
      this.getProducts = product_data;
    }
  
  }

  ascending(){
    this.getProducts.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  }


  sortProduct() {​​​​
  if(this.value == "asc"){
    this.getProducts.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  }
  else{
    this.getProducts.sort(function(a, b) {
      return parseFloat(b.price) - parseFloat(a.price);
      });
    }
  }​​​​

  selectProduct(value){
    this.itemSize = value.options;
    this.showSizes = true;
  }

  addToCart(value){
    this.selectedProduct.push(value);
    this.dashboardService.setProductCount(this.selectedProduct.length);
  }
}
