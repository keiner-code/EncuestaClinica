import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientescriticosPage } from './pacientescriticos.page';

const routes: Routes = [
  {
    path: '',
    component: PacientescriticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientescriticosPageRoutingModule {}
