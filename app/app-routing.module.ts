import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyformComponent} from './myform/myform.component'

const routes: Routes = [
  {
    path:'Angularform', component: MyformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
