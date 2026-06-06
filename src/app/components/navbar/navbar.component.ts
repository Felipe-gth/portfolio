import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    template: `
    <nav class="navbar" aria-label="Navegação principal">
        <ul class="list">
            <li><a routerLink="">Inicio</a></li>
            <li><a routerLink="projects">Meus projetos</a></li>
            <li><a routerLink="">Sobre mim</a></li>
            <li><a routerLink="">Contato</a></li>
        </ul>
    </nav>`,
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
