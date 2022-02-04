import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscribirpacientePageRoutingModule } from './inscribirpaciente-routing.module';

import { InscribirpacientePage } from './inscribirpaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscribirpacientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InscribirpacientePage]
})
export class InscribirpacientePageModule {}
