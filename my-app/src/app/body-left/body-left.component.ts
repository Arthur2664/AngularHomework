import { Component, OnChanges , Input , SimpleChanges, OnInit  } from '@angular/core';
import { EntitiesEntity } from '../services/city';


@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnChanges , OnInit {

  constructor() { }
  
  @Input() cityTerm : string
  @Input() lstLandmark : EntitiesEntity[]
  

  ngOnInit(){
    console.log(this.lstLandmark)
  }

  
  ngOnChanges(changes: SimpleChanges){ 
  console.log(this.lstLandmark)
  }
  

}
