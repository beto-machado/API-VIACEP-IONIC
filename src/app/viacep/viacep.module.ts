import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViacepPageRoutingModule } from './viacep-routing.module';

import { ViacepPage } from './viacep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViacepPageRoutingModule
  ],
  declarations: [ViacepPage]
})
export class ViacepPageModule {}
