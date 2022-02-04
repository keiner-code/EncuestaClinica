import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallestallerPageRoutingModule } from './detallestaller-routing.module';

import { DetallestallerPage } from './detallestaller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallestallerPageRoutingModule
  ],
  declarations: [DetallestallerPage]
})
export class DetallestallerPageModule {}
