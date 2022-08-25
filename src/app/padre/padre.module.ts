import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadrePageRoutingModule } from './padre-routing.module';

import { PadrePage } from './padre.page';
import { HijoComponent } from '../hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadrePageRoutingModule
  ],

  exports:[
    HijoComponent
  ],
  declarations: [PadrePage, HijoComponent]
})
export class PadrePageModule {}
