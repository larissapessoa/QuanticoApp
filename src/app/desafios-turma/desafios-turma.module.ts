import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafiosTurmaPageRoutingModule } from './desafios-turma-routing.module';

import { DesafiosTurmaPage } from './desafios-turma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafiosTurmaPageRoutingModule
  ],
  declarations: [DesafiosTurmaPage]
})
export class DesafiosTurmaPageModule {}
