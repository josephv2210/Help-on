import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProyectPage } from './create-proyect.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProyectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProyectPageRoutingModule {}
