import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorPageRoutingModule } from './professor-routing.module';

import { ProfessorPage } from './professor.page';
import { AdicionarturmaComponent } from '../adicionarturma/adicionarturma.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfessorPageRoutingModule
  ],
  declarations: [ProfessorPage, AdicionarturmaComponent],
  entryComponents: [AdicionarturmaComponent]
})
export class ProfessorPageModule { }
