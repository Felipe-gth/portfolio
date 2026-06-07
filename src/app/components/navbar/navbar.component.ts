import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    template: ` <nav
        class="navbar"
        [class.hidden]="isHidden"
        aria-label="Navegação principal"
    >
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
    private lastScroll = 0;
    isHidden = false;
    private tolerance = 0;

    constructor() {}

    ngOnInit(): void {}

    @HostListener('window:scroll')
    onScroll(): void {
        const currentScroll = window.pageYOffset;

        // Evita comportamento estranho no topo da página
        if (currentScroll <= 0) {
            this.isHidden = false;
            return;
        }

        const scrollDifference = currentScroll - this.lastScroll;

        // Descendo
        if (scrollDifference > this.tolerance) {
            this.isHidden = true;
            this.lastScroll = currentScroll;
        }

        // Subindo
        if (scrollDifference < -this.tolerance) {
            this.isHidden = false;
            this.lastScroll = currentScroll;
        }
    }
}
