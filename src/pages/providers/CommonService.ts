import {Injectable} from "@angular/core";
import {SERVER_URL} from "./config";
import {HttpClient,HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class CommonService {

	retValue:any={statusText:""};

 constructor(private readonly httpClient: HttpClient) {
	 
  }

  

 
 getUser(page):Observable<any> {
    return this.httpClient.get(`${SERVER_URL}/api/getuser?page=`+page+`&size=3`)
        .map(res => res)
        .catch(this.handleError);
}
 
 addEmp(emp):string {
	 
	 const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type':  'application/json'
		  })
		};
	 
    
		
		
		   this.httpClient
			.post(`${SERVER_URL}/app/addemp`,emp,httpOptions)
			.subscribe((res: Response) => {
					
			
				this.retValue.statusText=res.statusText;
			
			
			}, err=>console.log(err)); 
		
		return this.retValue.statusText;
		
}

 
 private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}
 
}