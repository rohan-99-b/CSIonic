import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionPage } from './action.page';

const routes: Routes = [
  {
    path: '',
    component: ActionPage
  },
  
  {
    path: 'contacts',
    loadChildren: () => import('../contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('../photos/photos.module').then( m => m.PhotosPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionPageRoutingModule {}
