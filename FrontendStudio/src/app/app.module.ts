import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DefaultComponent } from './layouts/default/default.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/menu/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    MenuComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
