import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';

import { Routes, RouterModule, } from '@angular/router';

const routes: Routes = [
    { path: '',      component: ProjectsComponent },
];

@NgModule({
    declarations: [ProjectsComponent, ProjectComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [ProjectComponent],
})
export class ProjectsModule {}
