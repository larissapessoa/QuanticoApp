import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level1Page } from './level1.page';

const routes: Routes = [
  {
    path: '',
    component: Level1Page
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level1PageRoutingModule {}
