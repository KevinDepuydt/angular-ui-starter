import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AuthenticationGuard } from './_guards/index';

// routes
import appRoutes from './app.routing';

// core
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/error/not-found/not-found.component';
// auth
import { AuthenticationService } from './_services/authentication.service';
import { LoginComponent } from './user/authentication/login/login.component';
import { RegisterComponent } from './user/authentication/register/register.component';
// users
import { UserService } from './_services/user.service';

@NgModule({
  imports: [
    appRoutes,
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RegisterComponent,
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
