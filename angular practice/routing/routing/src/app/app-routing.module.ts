import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalPeopleComponent } from './technical-people/technical-people.component';
import { DepartmentPeopleComponent } from './department-people/department-people.component';
import { RoutingtableComponent } from './routingtable/routingtable.component';

const routes: Routes = [
  {
    path:'technical', component: TechnicalPeopleComponent
  },
  {
    path: 'department', component:DepartmentPeopleComponent 
  },
  {
    path: 'routingtable', component:RoutingtableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TechnicalPeopleComponent, DepartmentPeopleComponent, RoutingtableComponent]