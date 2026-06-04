import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { projects } from '../../shared/data/projects.data';

import { Project } from '../../shared/models/project.model';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
    project?: Project;

    projectsDet: Project[] = [];

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.projectsDet = projects;

        const id = this.route.snapshot.paramMap.get('id');

        this.project = this.projectsDet.find((p) => p.id === Number(id));
    }
}
