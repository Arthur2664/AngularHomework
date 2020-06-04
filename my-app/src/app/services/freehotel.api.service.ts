import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'
import { HttpClient,HttpParams,HttpHeaders } from  '@angular/common/http'

import {City, EntitiesEntity} from './city'
import {hotels} from './hotels'

@Injectable()
export class freeApiService{

constructor(private httpclient: HttpClient) {}

private cityTerm = new BehaviorSubject<string>("New York")
currentCityTerm = this.cityTerm.asObservable()

private destinationID = new BehaviorSubject<string>("1506246")
currentDestinationID = this.destinationID.asObservable()

changeCity(cityTerm : string, destinaionID : string){

this.cityTerm.next(cityTerm)
this.destinationID.next(destinaionID)


}

 getCity(cityTerm : string) : Observable<City>{
    const httpOptions = {   
        headers: new HttpHeaders({
            'x-rapidapi-host':  'hotels4.p.rapidapi.com',
            'x-rapidapi-key': 'a338118cdbmsh03299e0429e102ap14fc30jsn8fb88b75fc8f'
          }),
          params: new HttpParams()
          .set('query',cityTerm)
          .set('locale', "en_US")      
    }    
    return this.httpclient.get<City>("https://hotels4.p.rapidapi.com/locations/search",httpOptions)
}
getHotels(destinaionID : string) : Observable<hotels>{
    const httpOptions = {   
        headers: new HttpHeaders({
            'x-rapidapi-host':  'hotels4.p.rapidapi.com',
            'x-rapidapi-key': 'a338118cdbmsh03299e0429e102ap14fc30jsn8fb88b75fc8f'
          }),
          params: new HttpParams()
          .set('currency',"USD")
          .set('locale', "en_US")      
          .set('sortOrder', "PRICE")  
          .set('destinationId', destinaionID.toString())  
          .set('pageNumber', "1")  
          .set('checkIn', "2020-01-08")  
          .set('checkOut', "2020-01-15")  
          .set('pageSize', "3")
          .set('adults1', "1")

    }    
    return this.httpclient.get<hotels>("https://hotels4.p.rapidapi.com/properties/list",httpOptions)

}


}
