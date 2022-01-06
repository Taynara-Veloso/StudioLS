import { MenuRoutingModule } from './menu.routing';
import { MaterialModule } from './../../material/material.module';
import { MenuComponent } from './menu.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';

@NgModule({
  declarations: [
    MenuComponent,
    CurriculoComponent,
    GaleriaFotosComponent,

  ],
  imports: [
    MaterialModule,
    CommonModule,
    MenuRoutingModule
  ]
})

export class MenuModule {}
