import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafiosTurmaPage } from './desafios-turma.page';

const routes: Routes = [
  {
    path: '',
    component: DesafiosTurmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafiosTurmaPageRoutingModule {}
