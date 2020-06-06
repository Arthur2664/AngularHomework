import { Component, OnChanges , Input , SimpleChanges, OnInit  } from '@angular/core';
import { freeApiService } from '../services/freehotel.api.service';
import { Hotels } from '../services/hotels';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-body-right',
  templateUrl: './body-right.component.html',
  styleUrls: ['./body-right.component.css']
})
export class BodyRightComponent implements OnInit , OnChanges {

  constructor(private _freeApiService: freeApiService) { }
  @Input() destinationID : string
  @Input() cityTerm : string

  
  totalCount : number
 

  lstHotel : Hotels
  ngOnInit(): void {
    this._freeApiService.currentTotalCount.subscribe(totalCount => this.totalCount = totalCount)
  }

    ngOnChanges(changes : SimpleChanges){
      console.log("Something changed RIGHT")
      this._freeApiService.getHotels(this.destinationID)
        .then(
          data=>
          {
            this.lstHotel = data
            console.log(this.lstHotel)
            this._freeApiService.updateTotalCount(data.data.body.searchResults.totalCount)
          }
        )
        
    }



}
