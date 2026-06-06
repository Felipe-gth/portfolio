import { Component, Input, OnInit } from '@angular/core';
import { Technology } from '../../shared/models/technology.model';

@Component({
    selector: 'app-technology',
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
    @Input() technologies?: Technology[] = [];

    constructor() {}

    ngOnInit(): void {}
}
