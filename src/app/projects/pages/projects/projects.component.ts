import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

import { projects } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';

@Component({
    selector: 'app-projects',
    template: `
        <section class="projects">
            <div role="search" class="input" [class.nav-hidden]="isNavbarHidden">
                <input
                    type="search"
                    autocomplete="off"
                    placeholder="Procurar projeto"
                    aria-label="Procurar projeto"
                    [(ngModel)]="filter"
                    name="filter"
                />
            </div>

            <app-project [projects]="filterProjects(filter)"></app-project>
        </section>
    `,
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
    filter: string = '';

    projectsCm: Project[] = projects;

    isNavbarHidden = false;

    constructor(private navbarService: NavbarService) {}

    ngOnInit(): void {
        this.navbarService.isHidden$.subscribe(hidden => {
            this.isNavbarHidden = hidden;
        });
    }

    filterProjects(filter: string) {
        return this.projectsCm.filter((p) =>
            p.title?.toUpperCase().includes(filter.toUpperCase()),
        );
    }
}
