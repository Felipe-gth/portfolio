import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: ` 
    <app-navbar></app-navbar>
    <section class="content">
        <router-outlet></router-outlet>
    </section> 
    <app-footer class="footer"></app-footer>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'portfolio';
}
