import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from '../../shared/models/project.model';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
    
    @Input() projects: Project[] = [];

    constructor (private Sanitizer: DomSanitizer) {
        
    }

    ngOnInit(): void {}

    sanitizar(url) {
        return this.Sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
