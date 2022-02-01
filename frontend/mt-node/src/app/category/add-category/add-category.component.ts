import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup = this.fb.group({
    categoryId: [],
    categoryName: [null, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      this.patchForm();
    }
  }

  patchForm() {
    this.categoryForm.patchValue(this.data.data);
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    if (this.categoryForm.invalid) {
      return this.categoryForm.markAllAsTouched();
    }

  }

}
