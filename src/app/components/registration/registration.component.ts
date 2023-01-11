import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router){}
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
    })
  }

  onSubmit(){
    console.log(this.reactiveForm)
    if(this.reactiveForm.valid){
      this.auth.registrateUser(
        this.reactiveForm.value.email,
        [
          this.reactiveForm.value.name,
          this.reactiveForm.value.password + "__UNITAG",
          this.auth.generateToken(),
          [[], [], []]
        ]
      )
      this.router.navigate(["login"])
    } else {
      alert("Wrong data")
    }
  }

}
