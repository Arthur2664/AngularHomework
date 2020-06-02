import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient,HttpParams,HttpHeaders } from  '@angular/common/http'

@Injectable()
export class freeApiService{

constructor(private httpclient: HttpClient) {}


getCity(): Observable<any>{
    const httpOptions = {   
        headers: new HttpHeaders({
            'x-rapidapi-host':  'hotels4.p.rapidapi.com',
            'x-rapidapi-key': 'e53e1ff361msh0a704e0626bd852p142813jsn633fc496d795'
          })
    
    }    
    return this.httpclient.get("https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=new york",httpOptions)
}


}