import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Version } from '../../shared/models/version.model';

@Component({
    selector: 'app-version',
    templateUrl: './version.component.html',
    styleUrls: ['./version.component.css'],
    animations: [
        trigger('expand', [
            transition(':enter', [
                style({ height: 0, opacity: 0 }),
                animate('300ms ease', style({ height: '*', opacity: 1 })),
            ]),
            transition(':leave', [
                style({ height: '*', opacity: 1 }),
                animate('300ms ease', style({ height: 0, opacity: 0 })),
            ]),
        ]),
    ],
})
export class VersionComponent implements OnInit {

    @Input() versions?: Version[];

    expandedIndex: number | null = null;

    constructor() {}

    toggle(index: number): void {
        this.expandedIndex = this.expandedIndex === index ? null : index;
    }

    ngOnInit(): void {}
}
