import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
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



  addIdeas(columnIndex:number){
    if(this.ideasToAdd == null || this.ideasToAdd == ""){
      console.log('Try to add empty task')
    } else {
      this.board.addTaskData(this.ideasToAdd, columnIndex)
    }
    this.ideasToAdd = ''
  }
  addInProgress(columnIndex:number){
    if(this.inProgressToAdd == null || this.inProgressToAdd == ""){
      console.log('Try to add empty task')
    } else {
      this.board.addTaskData(this.inProgressToAdd, columnIndex)
    }
    this.ideasToAdd = ''
  }
  addDone(columnIndex:number){
    if(this.doneToAdd == null || this.doneToAdd == ""){
      console.log('Try to add empty task')
    } else {
      this.board.addTaskData(this.doneToAdd, columnIndex)
    }
    this.ideasToAdd = ''
  }




  removeTask(fullList: Array<any>, task: string, columnIndex: number){
    let taskIndex = fullList.findIndex((x:string) => x === task)
    fullList.splice(taskIndex, 1)
    let data = this.board.returnTempData(this.board.returnTempUser())
    let parseData = JSON.parse(data)
    parseData[3][columnIndex] = fullList
    localStorage.setItem(this.board.returnTempUser(), JSON.stringify(parseData))
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
