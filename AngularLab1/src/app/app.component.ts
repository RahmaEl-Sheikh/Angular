import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLab1';


  @ViewChild(ProductComponent)
  productComponent: ProductComponent = new ProductComponent;
  showProductTable = false;

  displayData() {
    this.showProductTable = true;
    this.productComponent.renderValues();
  }

}


