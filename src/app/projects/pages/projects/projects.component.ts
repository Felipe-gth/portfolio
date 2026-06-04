import { Component, OnInit } from '@angular/core';

import { projects } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';

@Component({
    selector: 'app-projects',
    template: `
        <section class="projects">
            <div class="input-center">
                <input
                    type="text"
                    placeholder="Procurar projeto"
                    [(ngModel)]="filtro"
                />
            </div>

          <app-project [projects]="filterProjects(filtro)"></app-project>
        </section>
    `,
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

    filtro: string = '';
    
    projectsCm: Project[] = projects;

    ngOnInit(): void {}

    filterProjects(filtro: string) {
        return this.projectsCm.filter((p) =>
            p.title?.toUpperCase().includes(filtro.toUpperCase()),
        );
    }
}
