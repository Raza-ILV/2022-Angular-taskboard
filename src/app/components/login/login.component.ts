import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router, private guard: AuthGuard){}
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
    })
    if(localStorage.getItem("activeUser") != null){
      this.router.navigate(["user"])
    }
  }

  onSubmit(){
    const userEmail = this.reactiveForm.value.email
    const userPassword = this.reactiveForm.value.password
    if(this.auth.isUserExists(userEmail, userPassword)){
      this.router.navigate(["user"])
      this.auth.addToken(userEmail)
      console.log("User exists and Submit button was pressed")
    }
  }
}
