import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarencuestaPage } from './agregarencuesta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarencuestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarencuestaPageRoutingModule {}
