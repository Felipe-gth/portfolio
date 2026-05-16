import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
    { path: '', component: ProjectsComponent },
    { path: ':id', component: ProjectsComponent },
];

@NgModule({
    declarations: [ProjectsComponent, ProjectComponent, DetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
    exports: [ProjectComponent],
})
export class ProjectsModule {}
