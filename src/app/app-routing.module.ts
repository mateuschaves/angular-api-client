import { RegisterComponent } from './students/register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListComponent } from './students/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/alunos', pathMatch: 'full'},
  {path: 'alunos', component: ListComponent},
  {path: 'alunos/register', component: RegisterComponent},
  {path: "**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PagenotfoundComponent, ListComponent, RegisterComponent];
