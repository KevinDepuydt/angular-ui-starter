import { Routes, RouterModule } from '@angular/router';

// core
import { NotFoundComponent } from './core/error/not-found/not-found.component';
// app
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

const routing = RouterModule.forRoot(appRoutes);

export { routing };
