import { Component, OnInit } from '@angular/core';
import { freeApiService } from './services/freehotel.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private _freeApiService: freeApiService){
  } 

   
   ngOnInit() : void{
    }
  
}
