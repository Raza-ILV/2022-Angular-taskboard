import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotService } from 'src/app/services/forgot.service';

@Component({
  selector: 'app-fogot-password',
  templateUrl: './fogot-password.component.html',
  styleUrls: ['./fogot-password.component.css']
})
export class FogotPasswordComponent implements OnInit {
  constructor(private forgot: ForgotService){}

  reactiveForm: FormGroup<any>;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.email]),
      email: new FormControl(null, [Validators.required]),
    })
  }
  onSubmit() {
    alert(this.forgot.returnPassword(
      this.reactiveForm.value.name[0].toUpperCase() + this.reactiveForm.value.name.slice(1),
      this.reactiveForm.value.email.toLowerCase()
      )
    )
  }
  

}
