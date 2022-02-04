import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarencuestaPageRoutingModule } from './agregarencuesta-routing.module';

import { AgregarencuestaPage } from './agregarencuesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgregarencuestaPageRoutingModule
  ],
  declarations: [AgregarencuestaPage]
})
export class AgregarencuestaPageModule {}
