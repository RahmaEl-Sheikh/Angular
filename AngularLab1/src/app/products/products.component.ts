
import { Component, Pipe, PipeTransform } from '@angular/core';
import { IProduct, ICategory, DiscountOffers } from '../shared-classes-and-types/interfaces';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl:'./products.component.html',
  //  './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: IProduct[] = [];

// StoreName: string ;
togglePurchase() {
  this.IsPurshased = !this.IsPurshased;
throw new Error('Method not implemented.');
}
  Discount:DiscountOffers;
  // DiscountOffers = {
  //   NoDiscount: "No discount",
  //   SmallDiscount: "Small discount",
  //   LargeDiscount: "Large discount"
  // };
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
DiscountOffers: any;
categoryList: any;
productList: any;
IsPurshased: any;
  

  constructor() {
    // Initialize properties as needed
    this.Discount = DiscountOffers.NoDiscount;
    // this.Discount = this.DiscountOffers.NoDiscount;
    this.StoreName = '';
    this.StoreLogo = 'AngularLab1/src/assets/kevok.jpg';
    this.ProductList = [];
    this.CategoryList = [{
      ID:1,
      Name:"Books"
    },
    {
      ID:2,
      Name:"Tools"
    },
    {
      ID:3,
      Name:"Antique"
    }


    ];
    this.ClientName = '';
    this.IsPurchased = false;

    
  }
}

@Pipe({name: 'uppercase'})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
// @Pipe({name: 'percent'})
// export class PercentPipe implements PipeTransform {
//   transform(value: number): string {
//     return `${value}%`;
//   }
// }
@Pipe({
  name: 'discountPercent'
})
export class DiscountPercentPipe implements PipeTransform {
  transform(value: DiscountOffers): string {
    switch (value) {
      case DiscountOffers.NoDiscount:
        return '0%';
      case DiscountOffers.TenPercent:
        return '10%';
      case DiscountOffers.FifteenPercent:
        return '15%';
      default:
        return '';
    }
  }
}



export class ProductComponent {
  products: any;
  productService: any;

 

  constructor() { }

  renderValues() {
    this.products = this.productService.getAllProducts();
  }

}