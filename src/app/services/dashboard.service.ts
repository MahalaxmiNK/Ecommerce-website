import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import product_data from '../json/product.json'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  productData: any[];
  valueObj = {};
  itemCount: any;
  constructor(
    private http: HttpClient,
  ) { }

  // getProduct(){
  //   const url = "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json";
  //   console.log(this.http.get(url)); 
  //   return this.http.get(url);
  // }

  //THERE IS AN ERROR IN THE RESPONSE FROM THE URL SO HAVE CREATED SEPARATE JSON FILE.
  getProduct(){
    this.productData = product_data;
    return this.productData;
  }

  setProductCount(value){
    this.itemCount = value;
  }

  getProductCount(){
    return this.itemCount;
  }
}
