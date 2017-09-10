import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routes
import appRoutes from './app.routing';

// core
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/error/not-found/not-found.component';

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
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
