import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameComponent } from "./name/name.component";
import { UserComponent } from "./user/user.component";


const routes: Routes = [
  { path: 'name', component: NameComponent},
  { path: 'user', component: UserComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }