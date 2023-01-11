import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { AboutComponent } from './components/about/about.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BoardService } from 'src/app/services/board.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    KanbanComponent,
    AboutComponent,
  ],
  providers: [
    BoardService,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    DragDropModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserModule { }
