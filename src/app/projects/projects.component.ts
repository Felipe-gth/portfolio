import { Component, Input } from '@angular/core';
import { Project } from '../shared/Models/project.model';

@Component({
    selector: 'app-projects',
    template: `
    <ul *ngFor="let project of projects">
        <li>
            <app-project [project]="project"></app-project>
        </li>
    </ul>`,
})
export class ProjectsComponent {

        projects: Project[] = [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is the first project',
            technologies: ['Angular', 'TypeScript', 'CSS'],
            link: 'https://example.com/project1'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is the second project',
            technologies: ['React', 'JavaScript', 'HTML'],
            link: 'https://example.com/project2'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is the third project',
            technologies: ['Vue.js', 'JavaScript', 'CSS'],
            link: 'https://example.com/project3'
        }
    ]
}
