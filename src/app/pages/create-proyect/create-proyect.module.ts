import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CreateProyectPageRoutingModule } from './create-proyect-routing.module';

import { CreateProyectPage } from './create-proyect.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProyectPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateProyectPage]
})
export class CreateProyectPageModule {}
