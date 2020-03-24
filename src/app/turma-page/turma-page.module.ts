import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurmaPagePageRoutingModule } from './turma-page-routing.module';

import { TurmaPagePage } from './turma-page.page';
import { AdiconarTemasComponent } from '../adiconar-temas/adiconar-temas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TurmaPagePageRoutingModule
  ],
  declarations: [TurmaPagePage, AdiconarTemasComponent],
  entryComponents: [AdiconarTemasComponent]
})
export class TurmaPagePageModule {}
