import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ICategory } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }


  getCatgories(): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/getCatgory`)
    .pipe(
      map(res => res),
      catchError(err => {
        this._snackBar.open('Cannonball!!', 'Splash', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        throw err;
      })
    )
  }

  addCategory(data: ICategory): Observable<any> {
    return this.http.post(`${environment.SERVER_URL}/getCatgory`, data)
    .pipe(
      map(res => res),
      catchError(err => {
        this._snackBar.open('Cannonball!!', 'Splash', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        throw err;
      })
    )
  }

  updateCategory(data: ICategory): Observable<any> {
    return this.http.put(`${environment.SERVER_URL}/getCatgory`, data)
    .pipe(
      map(res => res),
      catchError(err => {
        this._snackBar.open('Cannonball!!', 'Splash', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        throw err;
      })
    )
  }

  deleteCategory(categoryId: ICategory): Observable<any> {
    return this.http.delete(`${environment.SERVER_URL}/getCatgory/${categoryId}`)
    .pipe(
      map(res => res),
      catchError(err => {
        this._snackBar.open('Cannonball!!', 'Splash', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        throw err;
      })
    )
  }
}
