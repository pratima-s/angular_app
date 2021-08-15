import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { AlltaskComponent } from './alltask/alltask.component';
import { CompletedComponent } from './completed/completed.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:"UserComponent", component:UserComponent},

  {
    path:"Alltask", component:AlltaskComponent
  },
  {
    path:"Active", component:ActiveComponent
  },
  {
    path:"Completed", component:CompletedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
