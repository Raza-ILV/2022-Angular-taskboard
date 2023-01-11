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


  addIdeasData(dataToAdd: string){
    let user:any = this.returnTempUser()
    let oldData:any = localStorage.getItem(user)
    let newData = JSON.parse(oldData)
    newData[3][0].push(dataToAdd)
    console.log(user, JSON.stringify(newData))
    localStorage.setItem(user, JSON.stringify(newData))
    window.location.reload();
  }
  addInProgressData(dataToAdd: string){
    let user:any = this.returnTempUser()
    let oldData:any = localStorage.getItem(user)
    let newData = JSON.parse(oldData)
    newData[3][1].push(dataToAdd)
    console.log(user, JSON.stringify(newData))
    localStorage.setItem(user, JSON.stringify(newData))
    window.location.reload();
  }
  addDoneData(dataToAdd: string){
    let user:any = this.returnTempUser()
    let oldData:any = localStorage.getItem(user)
    let newData = JSON.parse(oldData)
    newData[3][2].push(dataToAdd)
    console.log(user, JSON.stringify(newData))
    localStorage.setItem(user, JSON.stringify(newData))
    window.location.reload();
  }


  removeIdeasData(taskIndex: any){
    let data = this.returnTempData(this.returnTempUser())
    let parseData = JSON.parse(data)
    console.log(parseData[3])
    console.log(parseData)
    parseData[3][0].splice(taskIndex, 1)
    localStorage.setItem(this.returnTempUser(), JSON.stringify(parseData))
    window.location.reload();
  }
  removeInProgressData(taskIndex: any){
    let data = this.returnTempData(this.returnTempUser())
    let parseData = JSON.parse(data)
    console.log(parseData[3])
    console.log(parseData)
    parseData[3][0].splice(taskIndex, 1)
    localStorage.setItem(this.returnTempUser(), JSON.stringify(parseData))
    window.location.reload();
  }
  removeDoneData(taskIndex: any){
    let data = this.returnTempData(this.returnTempUser())
    let parseData = JSON.parse(data)
    console.log(parseData[3])
    console.log(parseData)
    parseData[3][0].splice(taskIndex, 1)
    localStorage.setItem(this.returnTempUser(), JSON.stringify(parseData))
    window.location.reload();
  }
}
