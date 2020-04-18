import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { Product } from './products/product';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  cart:Product[]=[];
  constructor (private productService:ProductService){
    this.updateCart();
  }

  updateCart(){
    this.productService.getCartItems().subscribe((item:Product)=>{
      console.log("Item Pushed");
      this.cart.push(item);
    })
  }
}
