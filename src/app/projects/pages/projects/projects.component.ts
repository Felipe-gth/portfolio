import { Component, OnInit } from '@angular/core';

import { projects } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';

@Component({
    selector: 'app-projects',
    template: `
        <section class="projects">
            <form role="search" class="input-center">
                <input
                    type="text"
                    autocomplete="off"
                    placeholder="Procurar projeto"
                    aria-label="Procurar projeto"
                    [(ngModel)]="filter"
                    name="filter"
                />
            </form>

            <app-project [projects]="filterProjects(filter)"></app-project>
        </section>
    `,
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
    filter: string = '';

    projectsCm: Project[] = projects;

    ngOnInit(): void {}

    filterProjects(filter: string) {
        return this.projectsCm.filter((p) =>
            p.title?.toUpperCase().includes(filter.toUpperCase()),
        );
    }
}
