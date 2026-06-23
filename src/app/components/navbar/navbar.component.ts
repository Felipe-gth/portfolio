import {
    Component,
    NgZone,
    OnDestroy,
    OnInit,
} from '@angular/core';

import { NavbarService } from 'src/app/services/navbar.service';

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
    lastScroll = 0;

    private ticking = false;

    constructor(
        private navbarService: NavbarService,
        private ngZone: NgZone
    ) {}

    private handleScroll = (): void => {

        if (this.ticking) return;

        this.ticking = true;

        requestAnimationFrame(() => {

            const currentScroll = window.scrollY;

            const diff = currentScroll - this.lastScroll;

            if (diff !== 0) {

                const hidden = diff > 0;

                if (hidden !== this.isHidden) {

                    this.ngZone.run(() => {

                        this.isHidden = hidden;

                        this.navbarService.isHidden$.next(
                            this.isHidden
                        );
                    });
                }

                this.lastScroll = currentScroll;
            }

            this.ticking = false;
        });
    };

    ngOnInit(): void {

        this.ngZone.runOutsideAngular(() => {

            window.addEventListener(
                'scroll',
                this.handleScroll,
                {
                    passive: true
                }
            );
        });
    }

    ngOnDestroy(): void {

        window.removeEventListener(
            'scroll',
            this.handleScroll
        );
    }
}