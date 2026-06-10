import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: ` 
        <hr>
        <footer class="footer">
            <p>{{ creator }} &reg; </p> 
            <p>Github: <a href="{{ github }}" target="_blank">{{ github.slice(8) }}</a></p>
            <p>Email de contato: {{ email }}</p>
            <p>{{ loc }}</p>
        </footer> 
    `,
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

    readonly creator = 'Felipe Manfrin Gonsales'
    readonly github = 'https://github.com/Felipe-gth'
    readonly email = 'criar email de contato'
    readonly loc = 'São Paulo, Brasil'

    constructor() {}

    ngOnInit(): void {}
}
