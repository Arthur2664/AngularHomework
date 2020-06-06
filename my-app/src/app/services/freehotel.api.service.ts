import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'
import { HttpClient,HttpParams,HttpHeaders } from  '@angular/common/http'

import {City, EntitiesEntity} from './city'
import {Hotels} from './hotels'

@Injectable()
export class freeApiService{

constructor(private httpclient: HttpClient) {}

private cityTerm = new BehaviorSubject<string>("New York")
currentCityTerm = this.cityTerm.asObservable()

private destinationID = new BehaviorSubject<string>("1506246")
currentDestinationID = this.destinationID.asObservable()

private totalCount = new BehaviorSubject<number>(1519)
  currentTotalCount = this.totalCount.asObservable()

changeCity(cityTerm : string, destinaionID : string){

this.cityTerm.next(cityTerm)
this.destinationID.next(destinaionID)


}

updateTotalCount(totalCount : number){
    this.totalCount.next(totalCount)
  }

async getCity (cityTerm : string) : Promise<City>{
    const httpOptions = {   
        headers: new HttpHeaders({
            'x-rapidapi-host':  'hotels4.p.rapidapi.com',
            'x-rapidapi-key': 'fd0696ac5emsh17ae4b8eaf94e10p15ecf2jsn36faee2dcf66'
          }),
          params: new HttpParams()
          .set('query',cityTerm)
          .set('locale', "en_US")      
    }    
    return await this.httpclient.get<City>("https://hotels4.p.rapidapi.com/locations/search",httpOptions).toPromise()
}
async getHotels(destinaionID : string) : Promise<Hotels>{
    const httpOptions = {   
        headers: new HttpHeaders({
            'x-rapidapi-host':  'hotels4.p.rapidapi.com',
            'x-rapidapi-key': 'fd0696ac5emsh17ae4b8eaf94e10p15ecf2jsn36faee2dcf66'
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
    return await this.httpclient.get<Hotels>("https://hotels4.p.rapidapi.com/properties/list",httpOptions).toPromise()

}


}
