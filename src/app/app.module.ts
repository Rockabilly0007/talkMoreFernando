import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRequestComponent } from './app-request/app-request.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/services/request.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RequestService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
