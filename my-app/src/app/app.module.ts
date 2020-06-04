import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 
import { HttpClientModule } from  '@angular/common/http'
import { FormsModule } from  '@angular/forms'
import { freeApiService } from './services/freehotel.api.service';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
     BrowserModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
