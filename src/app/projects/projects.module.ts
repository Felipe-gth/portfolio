import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/details/details.component';
import { TechnologyModule } from '../components/technology/technology.module';
import { VersionComponent } from './components/version/version.component';

const routes: Routes = [
    { path: '', component: ProjectsComponent },
    { path: ':id', component: DetailsComponent },
];

@NgModule({
    declarations: [ProjectsComponent, ProjectComponent, DetailsComponent, VersionComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule, TechnologyModule],
    exports: [ProjectComponent],
})
export class ProjectsModule {}
