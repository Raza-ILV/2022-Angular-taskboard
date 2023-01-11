import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  generateToken(){
    let randomString = ""
    let chars = "ABCDEFGHIJabcdefghij1234567890"
    for(let i = 0; i < 16; i++){
      randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return randomString
  }

  registrateUser(email: string, data: any){
    localStorage.setItem(email, JSON.stringify(data))
  }

  isUserExists(email: string, password: string){
    let userEmail = localStorage.getItem(email)       //{"name":"Any","password":"12345678"}
    if(userEmail?.includes(password + "__UNITAG")){
      return true
    } else {
      return false
    }
  }

  addToken(email: any){
    localStorage.setItem("activeUser", email)
  }

  logOutUser(){
    localStorage.removeItem("activeUser")
  }
}
