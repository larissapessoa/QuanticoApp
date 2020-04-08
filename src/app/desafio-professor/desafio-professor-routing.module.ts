import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafioProfessorPage } from './desafio-professor.page';

const routes: Routes = [
  {
    path: '',
    component: DesafioProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafioProfessorPageRoutingModule {}
