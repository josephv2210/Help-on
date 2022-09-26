import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectFilterPage } from './proyect-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectFilterPageRoutingModule {}
