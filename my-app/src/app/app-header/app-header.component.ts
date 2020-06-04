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

  onEnter(value: string) { 
    this.cityTerm = value 
    console.log(value)
    this._freeApiService.getCity(this.cityTerm)
    .subscribe(
      data=>
      {
        this.lstCity = data
        console.log(this.lstCity)
      } 

    );
    this._freeApiService.changeCity(this.cityTerm,this.lstCity.suggestions[1].entities)
  }  
  lstCity : City
  lstLandmark : EntitiesEntity[] 
  ngOnInit(): void {
    this._freeApiService.currentCityTerm.subscribe(cityTerm => this.cityTerm = cityTerm)
    this._freeApiService.currentlstLandmark.subscribe(lstLandmark => this.lstLandmark = lstLandmark)
    this._freeApiService.getCity(this.cityTerm)
    .subscribe(
      data=>
      {
        this.lstCity = data
        console.log(this.lstCity)
      } 
      
      )
      console.log(this.lstLandmark[0].name+ this.cityTerm)
    }



}
