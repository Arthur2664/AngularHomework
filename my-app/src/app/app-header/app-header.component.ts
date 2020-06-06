import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freehotel.api.service';
import {City , EntitiesEntity} from '../services/city'
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private _freeApiService: freeApiService){
  } 
  
  cityTerm : string
  destinationID :string
  changeDestinationID(destinationID : string){
    this.destinationID = destinationID
    console.log("YA TYPOE")
  }
  onEnter(value: string) { 
    this.cityTerm = value 
    console.log(this.cityTerm)
    this._freeApiService.getCity(this.cityTerm)
      .then(
        data=>
        {
          this.lstCity = data
          console.log(this.lstCity)
          this.changeDestinationID(data.suggestions[0].entities[0].destinationId)  
          console.log(this.destinationID)
          this._freeApiService.changeCity(this.cityTerm,this.destinationID)
        })
    console.log(this.cityTerm + this.destinationID)
  }  
  lstCity : City
  ngOnInit(): void {
    this._freeApiService.currentCityTerm.subscribe(cityTerm => this.cityTerm = cityTerm)
    this._freeApiService.currentDestinationID.subscribe(destinationID => this.destinationID = destinationID) 
    }



}
