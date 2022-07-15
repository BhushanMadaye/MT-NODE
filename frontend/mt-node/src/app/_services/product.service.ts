import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICategory, IProduct } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private _toastr: ToastrService) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any>(`${environment.SERVER_URL}/products`)
    .pipe(
      map((res: any) => {
        let products:any [] = [];
        res['rows'].forEach((ele: any) => {
          const productData: IProduct = {
            categoryId: ele.categoryId,
            id: ele.id,
            name: ele.name,
            category: this.mapToCategory(ele.category)
          }
          products.push(productData);
        });

        return products
      }),
      catchError(err => {
        this._toastr.error('error', err.error);
        throw err;
      })
    )
  }

  mapToCategory(category: ICategory) {
    return {
      id: category.id,
      name: category.name
    }
  }

  addProduct(data: IProduct): Observable<any> {
    return this.http.post(`${environment.SERVER_URL}/products`, data)
    .pipe(
      map(res => res),
      catchError(err => {
        this._toastr.error('error', err.error);
        throw err;
      })
    )
  }

  updateProduct(data: IProduct): Observable<any> {
    return this.http.put(`${environment.SERVER_URL}/products/${data.id}`, data)
    .pipe(
      map(res => res),
      catchError(err => {
        this._toastr.error('error', err.error);
        throw err;
      })
    )
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${environment.SERVER_URL}/products/${productId}`)
    .pipe(
      map(res => {
        return res
      }),
      catchError(err => {
        this._toastr.error('error', err.error);
        throw err;
      })
    )
  }
}
