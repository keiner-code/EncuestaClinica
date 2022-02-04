import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscribirpacientePage } from './inscribirpaciente.page';

const routes: Routes = [
  {
    path: '',
    component: InscribirpacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscribirpacientePageRoutingModule {}
