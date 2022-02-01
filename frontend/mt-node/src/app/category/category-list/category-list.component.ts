import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';

const CATEGORY_LIST = [
  { categoryId: 1, categoryName: 'Appliances' },
  { categoryId: 2, categoryName: 'Mobiles' },
  { categoryId: 3, categoryName: `Men's Fashion` },
  { categoryId: 4, categoryName: `Women's Fashion` },
  { categoryId: 5, categoryName: 'Toys' },
]

export interface ICategory {
  categoryId: number;
  categoryName: string;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList: ICategory[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addCategory();
    this.getCategories();
  }

  getCategories() {
    this.categoryList = CATEGORY_LIST
  }

  addCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '450px',
      data: { action: 'add' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editCategory(data: ICategory) {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '450px',
      data: { data, action: 'edit' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteCategory(categoryId: number) {
    // delete category 
  }
}
