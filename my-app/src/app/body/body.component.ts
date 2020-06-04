import { Component, OnInit, AfterViewInit } from '@angular/core';
import { freeApiService } from '../services/freehotel.api.service';
import {City, EntitiesEntity} from 'src/app/services/city'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  constructor(private _freeApiService: freeApiService){
  } 


  lstLandmark : EntitiesEntity[]
  cityTerm : string
  ngOnInit(): void {
    this._freeApiService.currentCityTerm.subscribe(cityTerm => this.cityTerm = cityTerm)
    this._freeApiService.currentlstLandmark.subscribe(lstLandmark => this.lstLandmark = lstLandmark)
    this.LOG()
  }
 


  LOG(){
    console.log(this.cityTerm,this.lstLandmark);
  }
  

}
