import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollService } from 'src/app/services/scroll.service';

@Component({
    selector: 'app-footer',
    template: ` 
        <div class="footer-bar" [class.hidden]="isHidden">
            <footer class="footer">
                
                <p>Github: <a href="{{ github }}" target="_blank">{{ github.slice(8) }}</a></p>
                <p>Email de contato: <a href="mailto:fmanfrin@gmail.com" target="_blank">{{ email }}</a></p>
                <p>{{ creator }} &reg;</p> 
                <p>{{ loc }}</p>
            </footer> 
        </div>
    `,
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {

    readonly creator = 'Felipe Manfrin Gonsales'
    readonly github = 'https://github.com/Felipe-gth'
    readonly email = 'fmanfrin.dev@gmail.com'
    readonly loc = 'São Paulo, Brasil'

    isHidden = true;
    private sub!: Subscription;

    constructor(private scrollService: ScrollService) {}

    ngOnInit(): void {
        this.sub = this.scrollService.direction$.subscribe(direction => {
            const hidden = direction !== 'down';
            if (hidden !== this.isHidden) {
                this.isHidden = hidden;
            }
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
