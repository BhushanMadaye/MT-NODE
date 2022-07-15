import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/_services';
import { ICategory } from '../../_models';

const CATEGORY_LIST = [
  { categoryId: 1, categoryName: 'Appliances' },
  { categoryId: 2, categoryName: 'Mobiles' },
  { categoryId: 3, categoryName: `Men's Fashion` },
  { categoryId: 4, categoryName: `Women's Fashion` },
  { categoryId: 5, categoryName: 'Toys' },
]

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    categoryId: [null, [Validators.required]],
    categoryName: [null],
    id: [],
    name: [null, [Validators.required]]
  });
  categoryList: ICategory[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProductComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getCategories();

    if (this.data.action == 'edit') {
      this.patchForm();
    }
  }

  getCategories() {
    this.categoryService.getCatgories().subscribe(res => {
      this.categoryList = res
    })
  }

  patchForm() {
    this.productForm.patchValue({
      id: this.data.data.id,
      name: this.data.data.name,
      categoryId: this.data.data.categoryId,
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }

  submit() {
    if (this.productForm.invalid) {
      return this.productForm.markAllAsTouched();
    }
    const data = {
      categoryId: this.productForm.controls.categoryId.value,
      id: this.productForm.controls.id.value,
      name: this.productForm.controls.name.value
    }
    this.dialogRef.close(data)
  }

}
