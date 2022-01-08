import { MaterialModule } from './../../../material/material.module';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './curriculo.component';
import { CurriculoRoutingModule } from './curriculo.routing';

@NgModule({
  declarations: [
    CurriculoComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    CurriculoRoutingModule,
  ],
  providers: []
})

export class CurriculoModule {}
