import { Component, Input, OnInit } from '@angular/core';
import { Version } from '../../shared/models/version.model';

@Component({
    selector: 'app-version',
    templateUrl: './version.component.html',
    styleUrls: ['./version.component.css'],
})
export class VersionComponent implements OnInit {

    @Input() versions?: Version[];

    constructor() {}

    ngOnInit(): void {}
}
