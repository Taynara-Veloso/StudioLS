import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';


const routes: Routes = [
  {
    path: 'app',
    component: DefaultComponent,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('src/app/pages/menu/menu.module')
        .then(m => m.MenuModule)
      }

  ],

  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
