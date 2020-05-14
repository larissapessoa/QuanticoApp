import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level5PageRoutingModule } from './level5-routing.module';

import { Level5Page } from './level5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level5PageRoutingModule
  ],
  declarations: [Level5Page]
})
export class Level5PageModule {}
