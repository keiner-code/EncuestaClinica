import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTallerPageRoutingModule } from './create-taller-routing.module';

import { CreateTallerPage } from './create-taller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTallerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateTallerPage]
})
export class CreateTallerPageModule {}
