import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level8PageRoutingModule } from './level8-routing.module';

import { Level8Page } from './level8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level8PageRoutingModule
  ],
  declarations: [Level8Page]
})
export class Level8PageModule {}
