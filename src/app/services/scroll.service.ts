import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private lastScroll = 0;
    private lastDirection: 'up' | 'down' | null = null;
    private ticking = false;

    direction$ = new BehaviorSubject<'up' | 'down' | null>(null);

    constructor(private ngZone: NgZone) {
        this.ngZone.runOutsideAngular(() => {
            window.addEventListener('scroll', this.handleScroll, { passive: true });
        });
    }

    private handleScroll = (): void => {
        if (this.ticking) return;
        this.ticking = true;

        requestAnimationFrame(() => {
            const currentScroll = window.scrollY;
            const diff = currentScroll - this.lastScroll;
            this.lastScroll = currentScroll;

            if (diff !== 0) {
                const direction = diff > 0 ? 'down' : 'up';

                if (direction !== this.lastDirection) {
                    this.lastDirection = direction;
                    this.ngZone.run(() => {
                        this.direction$.next(direction);
                    });
                }
            }

            this.ticking = false;
        });
    };
}
