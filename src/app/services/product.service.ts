import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory, IProduct, IProducts } from '../types/app.interface';
import { Constant } from './constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAllCategory(): Observable<string[]> {
    return this.http.get<string[]>(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }


  getAllProducts(): Observable<IProducts[]> {
    const apiUrl = Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT;
    console.log('API URL:', apiUrl); 
    return this.http.get<IProducts[]>(apiUrl);
  }
  

  createProduct(data: any): Observable<any> {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, data)
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${Constant.API_END_POINT +  Constant.METHODS.CREATE_PRODUCT}/${productId}`);
  }
  
  


}