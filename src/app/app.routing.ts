import { Routes, RouterModule } from '@angular/router';

// core
import { NotFoundComponent } from './core/error/not-found/not-found.component';
// app
import { HomeComponent } from './home/home.component';
// users
// auth
import { LoginComponent } from './user/authentication/login/login.component';
import { RegisterComponent } from './user/authentication/register/register.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

export default RouterModule.forRoot(appRoutes);
