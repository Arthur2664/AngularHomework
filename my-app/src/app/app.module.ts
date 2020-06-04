import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 
import { HttpClientModule } from  '@angular/common/http'
import { FormsModule } from  '@angular/forms'
import { freeApiService } from './services/freehotel.api.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BodyComponent } from './body/body.component';
import { BodyLeftComponent } from './body-left/body-left.component';
import { BodyRightComponent } from './body-right/body-right.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BodyComponent,
    BodyLeftComponent,
    BodyRightComponent
  ],
  imports: [
     BrowserModule,
     HttpClientModule,
     FormsModule,
     BrowserAnimationsModule,
     MatCardModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
