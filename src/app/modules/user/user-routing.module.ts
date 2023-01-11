import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KanbanComponent } from './components/kanban/kanban.component';

const routes: Routes = [
  { path: "",
    component: DashboardComponent,
    children: [
      {path: "kanban", component: KanbanComponent},
      {path: "about", component: AboutComponent},
      {path: "", redirectTo: "kanban", pathMatch: "full"},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
