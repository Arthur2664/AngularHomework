import { Component, OnChanges , Input , SimpleChanges, OnInit  } from '@angular/core';
import { freeApiService } from '../services/freehotel.api.service';
import {City, EntitiesEntity} from 'src/app/services/city'
import { hotels } from '../services/hotels';

@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit , OnChanges {

  constructor(private _freeApiService: freeApiService) { }

  @Input() cityTerm : string
  @Input() destinationID : string
  
  lstCity : City
  lstHotel : hotels
  ngOnInit(): void {
  }
    ngOnChanges(changes : SimpleChanges){
      console.log("I AM WORKING")
      this._freeApiService.getCity(this.cityTerm)
      .subscribe(
        data=>
        {
          this.lstCity = data
          console.log(this.lstCity)
  
        } 
        ) 
      this._freeApiService.getHotels(this.destinationID)
        .subscribe(
          data=>
          {
            this.lstHotel = data
            console.log(this.lstHotel)
          }
        )
        
    }



}
