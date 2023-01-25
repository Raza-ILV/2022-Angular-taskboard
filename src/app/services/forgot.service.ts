import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  constructor() { }
  returnPassword(name: string, email: string){
    let data: any = localStorage.getItem(email)
    if(JSON.parse(data)[0] == name){
      return JSON.parse(data)[1]
    }
  }
}
