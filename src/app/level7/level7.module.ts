import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level7PageRoutingModule } from './level7-routing.module';

import { Level7Page } from './level7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level7PageRoutingModule
  ],
  declarations: [Level7Page]
})
export class Level7PageModule {}
