import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafioProfessorPageRoutingModule } from './desafio-professor-routing.module';

import { DesafioProfessorPage } from './desafio-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafioProfessorPageRoutingModule
  ],
  declarations: [DesafioProfessorPage]
})
export class DesafioProfessorPageModule {}
