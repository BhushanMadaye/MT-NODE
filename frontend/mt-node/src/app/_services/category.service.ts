import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { ICategory } from '../_models';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private _toastr: ToastrService) { }

  getCatgories(): Observable<any[]> {
    return this.http.get<any>(`${environment.SERVER_URL}/categories`)
    .pipe(
      map((res: any) => {
        let balanceSummary:any [] = [];
        res['rows'].forEach((ele: any) => {
          const balanceSummaryData: ICategory = {
            id: ele.id,
            name: ele.name
          }
          balanceSummary.push(balanceSummaryData);
        });

        return balanceSummary
      }),
      catchError(err => {
        this._toastr.error('error', err.error);
        throw err;
      })
    )
  }

  addCategory(data: ICategory): Observable<any> {
    return this.http.post(`${environment.SERVER_URL}/categories`, data)
    .pipe(
      map(res => res),
      catchError(err => {
        this._toastr.error('error', err.error);
        throw err;
      })
    )
  }

  updateCategory(data: ICategory): Observable<any> {
    return this.http.put(`${environment.SERVER_URL}/categories/${data.id}`, data)
    .pipe(
      map(res => res),
      catchError(err => {
        this._toastr.error('error', err.error);
        throw err;
      })
    )
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${environment.SERVER_URL}/categories/${categoryId}`)
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
