import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

import { projects } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';
import { CategoryButton } from '../../shared/models/categoryButton.model';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
    filter: string = '';
    projectsCm: Project[] = projects;
    filteredProjects: Project[] = [];
    isNavbarHidden = false;

    public buttons: CategoryButton[] = [];

    constructor(private navbarService: NavbarService) {}

    ngOnInit(): void {
        this.filteredProjects = this.projectsCm;

        this.navbarService.isHidden$.subscribe((hidden) => {
            this.isNavbarHidden = hidden;
        });

        this.buttons = this.filteredProjects.map((p) => p.category)
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((category) => ({ name: category, selected: false }));
    }

    filterProjects(filter: string) {
        this.filteredProjects = this.projectsCm.filter((p) =>
            p.title?.toUpperCase().includes(filter.toUpperCase()),
        );
    }

    getCategories(): string[] {
        return [...new Set(this.projectsCm.map((p) => p.category))].filter(
            (v): v is string => !!v
        );
    }

    filterByCategory(button: CategoryButton) {
        button.selected = !button.selected;

        const selectedCategories = this.buttons
            .filter((b) => b.selected)
            .map((b) => b.name);

        if (selectedCategories.length === 0) {
            this.filteredProjects = this.projectsCm;
        } else {
            this.filteredProjects = this.projectsCm.filter(
                (p) => p.category && selectedCategories.includes(p.category),
            );
        }
    }
}
