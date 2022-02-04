import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesrealizarpruebaPageRoutingModule } from './pacientesrealizarprueba-routing.module';

import { PacientesrealizarpruebaPage } from './pacientesrealizarprueba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesrealizarpruebaPageRoutingModule
  ],
  declarations: [PacientesrealizarpruebaPage]
})
export class PacientesrealizarpruebaPageModule {}
