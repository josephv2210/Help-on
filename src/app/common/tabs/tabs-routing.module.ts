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
        loadChildren: () => import('../../pages/search/search.module').then(m => m.SearchPageModule)
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
        path: '',
        redirectTo: '/help-On/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/help-On/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
