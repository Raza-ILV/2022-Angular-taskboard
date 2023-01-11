import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private guard: AuthGuard, private auth: AuthService){}
  logOut(){
    this.auth.logOutUser()
    console.log("User was logged out")
  }
}
