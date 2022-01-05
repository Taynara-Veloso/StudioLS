import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeModule } from 'src/app/pages/menu/home/home.module';

const routes: Routes = [
  {path: 'app',
  component: DefaultComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('src/app/pages/menu/home/home.module')
      .then(m => m.HomeModule)
    }

  ]

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
