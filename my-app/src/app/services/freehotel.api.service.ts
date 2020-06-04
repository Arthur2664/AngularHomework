import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'
import { HttpClient,HttpParams,HttpHeaders } from  '@angular/common/http'

import {City, EntitiesEntity} from './city'

@Injectable()
export class freeApiService{

constructor(private httpclient: HttpClient) {}

private cityTerm = new BehaviorSubject<string>("New York")
currentCityTerm = this.cityTerm.asObservable()

Entities : Entities[]


private lstLandmark = new BehaviorSubject<EntitiesEntity[]>(this.Entities)
currentlstLandmark = this.lstLandmark.asObservable()

changeCity(cityTerm : string, lstLandmark : EntitiesEntity[]){

this.lstLandmark.next(lstLandmark)    
this.cityTerm.next(cityTerm)
console.log(lstLandmark)


}

 getCity(cityTerm : string) : Observable<City>{
    const httpOptions = {   
        headers: new HttpHeaders({
            'x-rapidapi-host':  'hotels4.p.rapidapi.com',
            'x-rapidapi-key': 'e53e1ff361msh0a704e0626bd852p142813jsn633fc496d795'
          }),
          params: new HttpParams()
          .set('query',cityTerm)
          .set('locale', "en_US")      
    }    
    return this.httpclient.get<City>("https://hotels4.p.rapidapi.com/locations/search",httpOptions)
}


}

export class Entities {
    geoId = "1000000000000502103";
    destinationId =  "1634221";
    landmarkCityDestinationId?: "1634221" | null;
    type = "LANDMARK";
    caption =  "<span class='highlighted'>New</span> <span class='highlighted'>York</span> University, New York, United States of America";
    redirectPage = "DEFAULT_PAGE";
    latitude = 40.72984;
    longitude = -73.99529;
    name =  "New York University";

}