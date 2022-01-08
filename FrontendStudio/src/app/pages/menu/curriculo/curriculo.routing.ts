import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CurriculoModule } from './curriculo.module';

const routes : Routes = [

  {path: '', component: CurriculoModule}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CurriculoRoutingModule {}
