import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'help-On',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../../pages/proyect-detail/proyect-detail.module').then(m => m.ProyectDetailPageModule)
      },
      {
        path: 'create-proyect',
        loadChildren: () => import('../../pages/create-proyect/create-proyect.module').then(m => m.CreateProyectPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../../pages/notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../pages/auth/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/help-On/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/help-On/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
