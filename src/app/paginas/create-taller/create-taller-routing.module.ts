import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTallerPage } from './create-taller.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTallerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTallerPageRoutingModule {}
