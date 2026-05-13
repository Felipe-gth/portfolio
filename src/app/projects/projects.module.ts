import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'projects',      component: ProjectsComponent }
];

@NgModule({
    declarations: [ProjectsComponent, ProjectComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [ProjectComponent],
})
export class ProjectsModule {}
