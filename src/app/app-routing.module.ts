import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeScreenComponent} from './home-screen.component';

const routes: Routes = [
  {
    path: 'users',
    component: HomeScreenComponent,
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
