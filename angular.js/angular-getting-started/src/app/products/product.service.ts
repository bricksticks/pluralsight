import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IProduct } from "./product.interface";

/** 
 * Injectable service which provides access to the products database for the
 * website.
 */
@Injectable({
    providedIn: 'root'
})
export class ProductService  {

  private _productsUrl:string = 'api/products/products.json';

  constructor(private _httpClient: HttpClient) {
      
  }

  private handleError(serverResponse: HttpErrorResponse){
    
    let errorMessage:string = '';

    if(serverResponse.error instanceof ErrorEvent) {

      errorMessage = `An error occured: ${serverResponse.error.message}`;
    } else {

      errorMessage = `Server return code: ${serverResponse.status}, error message is: ${serverResponse.message}`;
    }

    console.error(errorMessage);

    return throwError(()=>errorMessage);
  }

  /**
   * Get access to the products in the database.
   * 
   * @returns The list of currently stored products.
   */
  getProducts(): Observable<IProduct[]> {
      
    return this._httpClient.get<IProduct[]>(this._productsUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(productCode: string): Observable<IProduct | undefined> {

    return this._httpClient.get<IProduct[]>(this._productsUrl).pipe(
      map((products: IProduct[]) => products.find(candidate => candidate.productCode === productCode)),
      catchError(this.handleError)
    );
  }
}