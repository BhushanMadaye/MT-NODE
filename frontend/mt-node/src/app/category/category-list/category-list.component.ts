import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/_services';
import { ICategory } from '../../_models';
import { AddCategoryComponent } from '../add-category/add-category.component';

const CATEGORY_LIST = [
  { categoryId: 1, categoryName: 'Appliances' },
  { categoryId: 2, categoryName: 'Mobiles' },
  { categoryId: 3, categoryName: `Men's Fashion` },
  { categoryId: 4, categoryName: `Women's Fashion` },
  { categoryId: 5, categoryName: 'Toys' },
]


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList: ICategory[] = [];

  constructor(public dialog: MatDialog, private categoryService: CategoryService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    // this.addCategory();
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCatgories().subscribe(res => {
      this.categoryList = res
    })
  }

  addCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '450px',
      data: { action: 'add' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result) return;
      this.categoryService.addCategory(result).subscribe(res => {
        this._toastr.success(res);
        this.getCategories()
      })
    });
  }

  editCategory(data: ICategory) {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '450px',
      data: { data, action: 'edit' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.categoryService.updateCategory(result).subscribe(res => {
        this._toastr.success(res);
        this.getCategories()
      })
    });
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe(res => {
      this._toastr.success(res);
      this.getCategories()
    })
  }
}
