import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ProjectsModule } from './projects/projects.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
