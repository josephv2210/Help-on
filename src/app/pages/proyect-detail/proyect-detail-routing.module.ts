import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectDetailPage } from './proyect-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectDetailPageRoutingModule {}
