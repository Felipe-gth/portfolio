import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
    selector: 'app-navbar',
    template: ` 
    <nav class="navbar" [class.hidden]="isHidden" aria-label="Navegação principal">
        <ul class="list">
            <li><a routerLink="">Inicio</a></li>
            <li><a routerLink="projects">Meus projetos</a></li>
            <li><a routerLink="">Sobre mim</a></li>
            <li><a routerLink="">Contato</a></li>
        </ul>
    </nav>
    `,
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    isHidden = false;
    lastScroll = 0;

    constructor(private navbarService: NavbarService) {}

    ngOnInit(): void {}

    @HostListener('window:scroll')
    onScroll(): void {
        const currentScroll = window.pageYOffset;

        this.isHidden = currentScroll > this.lastScroll;

        if (currentScroll <= 0) {
            this.isHidden = false;
        }

        this.navbarService.isHidden$.next(this.isHidden);

        this.lastScroll = currentScroll;
    }
}
