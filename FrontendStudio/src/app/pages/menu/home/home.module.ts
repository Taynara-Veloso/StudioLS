import { HomeRoutingModule } from './home.routing';
import { MaterialModule } from './../../../material/material.module';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HomeRoutingModule,
  ],
  providers: []
})
export class HomeModule{}
