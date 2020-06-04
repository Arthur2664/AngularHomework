import { Component, OnChanges , Input , SimpleChanges, OnInit  } from '@angular/core';
import { freeApiService } from '../services/freehotel.api.service';
import {City, EntitiesEntity} from 'src/app/services/city'

@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnChanges , OnInit {

  constructor(private _freeApiService: freeApiService) { }
  
  @Input() cityTerm : string
  
  lstCity : City

  ngOnInit(){

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
    }
  
  

}
