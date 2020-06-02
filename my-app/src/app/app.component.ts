import { Component, OnInit } from '@angular/core';
import { freeApiService } from './services/freehotel.api.service';

import {City} from './classes/city'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private _freeApiService: freeApiService){
  } 
  lstCity:City[];
  ngOnInit(){
    
    this._freeApiService.getCity()
    .subscribe(
      data=>
      {
        this.lstCity = data;
        console.log(this.lstCity)
      } 

    );

  }
  
}
