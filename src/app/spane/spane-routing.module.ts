import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserGuard } from '../guard/user.guard';
import { SpanePage } from './spane.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: '',
    component: SpanePage,
    children:[
        {
         path: 'home',
         loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        },
      
        {
          path: 'tutorial',
          loadChildren: () => import('../tutorial/tutorial.module').then( m => m.TutorialPageModule)
        },
        {
          path: 'login',
          loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
        },
        {
          path: 'dashboard',
          loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule),
          // canActivate:[UserGuard],
          // canActivateChild:[UserGuard],
          // canLoad:[UserGuard]
        },
        {
          path: 'posts',
          loadChildren: () => import('../posts/posts.module').then( m => m.PostsPageModule)
        },
        {
          path: 'action',
          loadChildren: () => import('../action/action.module').then( m => m.ActionPageModule)
        },
        {
          path: 'loginuser',
          loadChildren: () => import('../loginuser/loginuser.module').then( m => m.LoginuserPageModule)
        },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpanePageRoutingModule {}
