import {Injectable} from "@angular/core";
import {SERVER_URL} from "./config";
import {HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class CommonService {

	retValue:any={statusText:""};

 constructor(private readonly httpClient: HttpClient) {
	 
  }

  

 
 getUser(page):Observable<any> {
    return this.httpClient.get(`${SERVER_URL}/api/getuser?page=`+page+`&size=3`).pipe(
			catchError(this.handleError)
		);
		
}
 
 addEmp(emp):Observable<any> {
	 
	 const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json'
		  })
		};
	 
    
		
		
		   return this.httpClient
			.post<any>(`${SERVER_URL}/app/addemp`,emp,httpOptions).pipe(
			catchError(this.handleError)
		);
		
}

 
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an ErrorObservable with a user-facing error message
  return new ErrorObservable(
    'Something bad happened; please try again later.');
};
 
}