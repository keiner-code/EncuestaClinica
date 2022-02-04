import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallestallerPage } from './detallestaller.page';

const routes: Routes = [
  {
    path: '',
    component: DetallestallerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallestallerPageRoutingModule {}
