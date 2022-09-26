import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProyectPageRoutingModule } from './create-proyect-routing.module';

import { CreateProyectPage } from './create-proyect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProyectPageRoutingModule
  ],
  declarations: [CreateProyectPage]
})
export class CreateProyectPageModule {}
