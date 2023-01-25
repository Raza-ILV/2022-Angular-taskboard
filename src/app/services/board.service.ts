import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private router: Router) { }

  returnTempUser(){
    let user:any = localStorage.getItem("activeUser")
    return user
  }
  returnTempData(user: any){
    let data:any = localStorage.getItem(user)
    return data
  }


  returnIdeasData(){
    let data = this.returnTempData(this.returnTempUser())
    return JSON.parse(data)[3][0]
  }
  returnInProgressData(){
    let data = this.returnTempData(this.returnTempUser())
    return JSON.parse(data)[3][1]
  }
  returnDoneData(){
    let data = this.returnTempData(this.returnTempUser())
    return JSON.parse(data)[3][2]
  }


  addTaskData(dataToAdd: string, columnIndex: number){
    let user:any = this.returnTempUser()
    let oldData:any = localStorage.getItem(user)
    let newData = JSON.parse(oldData)
    newData[3][columnIndex].push(dataToAdd)
    console.log(user, JSON.stringify(newData))
    localStorage.setItem(user, JSON.stringify(newData))
    window.location.reload();
  }
}
