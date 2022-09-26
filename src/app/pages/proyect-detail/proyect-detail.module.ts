import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectDetailPageRoutingModule } from './proyect-detail-routing.module';

import { ProyectDetailPage } from './proyect-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectDetailPageRoutingModule
  ],
  declarations: [ProyectDetailPage]
})
export class ProyectDetailPageModule {}
