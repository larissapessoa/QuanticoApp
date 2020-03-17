import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmaPagePage } from './turma-page.page';

const routes: Routes = [
  {
    path: '',
    component: TurmaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurmaPagePageRoutingModule {}
