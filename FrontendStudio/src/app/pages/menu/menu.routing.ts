import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { MenuComponent } from './menu.component';

const routes: Routes = [

  {path: '', redirectTo: 'home'},

  {path: 'home',
  component: MenuComponent,
  loadChildren: () =>
    import('./home/home.module').then(
      (module) => module.HomeModule
    ),
  },
  {path: 'curriculo',
  component: MenuComponent,
  loadChildren: () =>
    import('./curriculo/curriculo.module').then(
      (module) => module.CurriculoModule
    ),
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
