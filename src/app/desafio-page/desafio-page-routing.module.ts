import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafioPagePage } from './desafio-page.page';


const routes: Routes = [
  {
    path: '',
    component: DesafioPagePage
  },
  {
    path: 'tab1',
    children: [
      {
        path: '',
        redirectTo: '/tabs/tabs/tab1',
        pathMatch: 'full'
      }
    ]

  },

  {

    path: 'tab2',
    children: [
      {
        path: '',
        redirectTo: '/tabs/tabs/tab2',
        pathMatch: 'full'
      }
    ]

  },

  {
    path: 'tab3',
    children: [
      {
        path: '',
        redirectTo: '/tabs/tabs/tab3',
        pathMatch: 'full'
      }
    ]

  },
  {
    path: '',
    redirectTo: '/tabs/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'level1',
    loadChildren: () => import('src/app/level1/level1.page').then( m => m.Level1Page)
  },
  {
    path: 'level2',
    loadChildren: () => import('src/app/level2/level2.page').then( m => m.Level2Page)
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafioPagePageRoutingModule {}
