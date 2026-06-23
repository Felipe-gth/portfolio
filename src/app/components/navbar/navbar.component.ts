import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavbarService } from 'src/app/services/navbar.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
    selector: 'app-navbar',
    template: `
    <nav class="navbar" [class.hidden]="isHidden" aria-label="Navegação principal">
        <ul class="list">
            <li><a routerLink="">Inicio</a></li>
            <li><a routerLink="projects">Meus projetos</a></li>
            <li><a routerLink="">Sobre mim</a></li>
        </ul>
    </nav>
    `,
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

    isHidden = false;
    private sub!: Subscription;

    constructor(
        private navbarService: NavbarService,
        private scrollService: ScrollService,
    ) {}

    ngOnInit(): void {
        this.sub = this.scrollService.direction$.subscribe(direction => {
            const hidden = direction === 'down';
            if (hidden !== this.isHidden) {
                this.isHidden = hidden;
                this.navbarService.isHidden$.next(this.isHidden);
            }
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}