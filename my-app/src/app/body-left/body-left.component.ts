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

  totalCount: number;
  
  ngOnInit(){
    this._freeApiService.currentTotalCount.subscribe(totalCount => this.totalCount = totalCount)
  }

    ngOnChanges(changes : SimpleChanges){
      console.log("Something changed LEFT")
      this._freeApiService.getCity(this.cityTerm)
      .then(
        data=>
        {
          this.lstCity = data
          console.log(this.lstCity)  
        } 
        
        )  
    }
  
  

}
