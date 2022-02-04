import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientescriticosPageRoutingModule } from './pacientescriticos-routing.module';

import { PacientescriticosPage } from './pacientescriticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientescriticosPageRoutingModule
  ],
  declarations: [PacientescriticosPage]
})
export class PacientescriticosPageModule {}
