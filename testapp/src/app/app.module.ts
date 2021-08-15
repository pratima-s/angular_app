import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlltaskComponent } from './alltask/alltask.component';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { RoutelinkComponent } from './routelink/routelink.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AlltaskComponent,
    ActiveComponent,
    CompletedComponent,
    RoutelinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
