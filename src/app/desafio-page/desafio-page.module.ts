import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafioPagePageRoutingModule } from './desafio-page-routing.module';

import { DesafioPagePage } from './desafio-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafioPagePageRoutingModule
  ],
  declarations: [DesafioPagePage]
})
export class DesafioPagePageModule {}
