import { Component, OnInit} from '@angular/core';
import { freeApiService } from '../services/freehotel.api.service';
import {City, EntitiesEntity} from 'src/app/services/city'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _freeApiService: freeApiService){
  } 


  cityTerm : string
  destinationID :string
  
  ngOnInit(): void {
    this._freeApiService.currentCityTerm.subscribe(cityTerm => this.cityTerm = cityTerm)  
    this._freeApiService.currentDestinationID.subscribe(destinationID => this.destinationID = destinationID)  
  }
  
 


  

}
