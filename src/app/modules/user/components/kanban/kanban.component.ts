import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  constructor(private board: BoardService){}

  ideasToAdd: string = ''
  inProgressToAdd: string = ''
  doneToAdd: string = ''
  
  ideas: any
  inProgress:any
  done:any
  ngOnInit(): void {
    console.log(this.board.returnIdeasData())
    this.ideas = this.board.returnIdeasData()
    console.log(this.board.returnInProgressData())
    this.inProgress = this.board.returnInProgressData()
    console.log(this.board.returnDoneData())
    this.done = this.board.returnDoneData()
  }



  addIdeas(){
    if(this.ideasToAdd == null || this.ideasToAdd == ""){
      console.log('Try to add empty task')
    } else {
      this.board.addIdeasData(this.ideasToAdd)
    }
    this.ideasToAdd = ''
  }
  addInProgress(){
    if(this.inProgressToAdd == null || this.inProgressToAdd == ""){
      console.log('Try to add empty task')
    } else {
      this.board.addInProgressData(this.inProgressToAdd)
    }
    this.ideasToAdd = ''
  }
  addDone(){
    if(this.doneToAdd == null || this.doneToAdd == ""){
      console.log('Try to add empty task')
    } else {
      this.board.addDoneData(this.doneToAdd)
    }
    this.ideasToAdd = ''
  }




  removeIdeas(event: any){
    console.log(event)
  }




  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer == event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
    let oldData = this.board.returnTempData(this.board.returnTempUser())
    let newData = JSON.parse(oldData)
    newData[3][0] = this.ideas
    newData[3][1] = this.inProgress
    newData[3][2] = this.done
    localStorage.setItem(this.board.returnTempUser(), JSON.stringify(newData))
  }
}
