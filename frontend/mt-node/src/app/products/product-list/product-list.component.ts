import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from '../../_models';
import { AddProductComponent } from '../add-product/add-product.component';

const PRODUCT_LIST = [
  { categoryId: 1, categoryName: 'Appliances', productId: 1, productName: 'Washing Machine' },
  { categoryId: 1, categoryName: 'Appliances', productId: 2, productName: 'Television' },
  { categoryId: 1, categoryName: 'Appliances', productId: 3, productName: 'Heater' },
  { categoryId: 1, categoryName: 'Appliances', productId: 4, productName: 'Computer' },
  { categoryId: 2, categoryName: 'Mobiles', productId: 5, productName: 'One Plus 9T' },
  { categoryId: 2, categoryName: 'Mobiles', productId: 6, productName: 'Samsung Note 10' },
  { categoryId: 2, categoryName: 'Mobiles', productId: 5, productName: 'Iphone 13 Pro' },
  { categoryId: 2, categoryName: 'Mobiles', productId: 5, productName: 'Realme 2 Pro' },
  { categoryId: 2, categoryName: 'Mobiles', productId: 5, productName: 'Realme XT' },
  { categoryId: 2, categoryName: 'Mobiles', productId: 5, productName: 'MI 9' },

]


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: IProduct[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addProduct();
    this.getProducts();
  }

  getProducts() {
    this.productList = PRODUCT_LIST
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '450px',
      data: { action: 'add' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editProduct(data: IProduct) {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '450px',
      data: { data, action: 'edit' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteProduct(categoryId: number) {
    // delete category 
  }

}
