import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FogotPasswordComponent } from './components/fogot-password/fogot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  { path: "forgot-password",
    component: FogotPasswordComponent
  },
  { path: "registration",
    component: RegistrationComponent
  },
  { path: "user",
    loadChildren: () => import("./modules/user/user.module").then((m) => m.UserModule),
    canActivate: [AuthGuard]
  },
  { path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
