import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: '**', redirectTo: 'categories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
