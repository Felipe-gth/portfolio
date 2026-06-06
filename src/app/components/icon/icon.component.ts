import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon',
    template: `<img [src]="iconURL" alt="Icon" class="icon">`,
    styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
    @Input() iconURL?: string = '';

    constructor() {}

    ngOnInit(): void {}
}
