import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from '../../shared/models/project.model';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewInit {
    
    @Input() projects: Project[] = [];

    constructor (private Sanitizer: DomSanitizer, private el: ElementRef) {
        
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        const iframes = this.el.nativeElement.querySelectorAll('.iframe');
        const IFRAME_WIDTH = 1440;
        const IFRAME_HEIGHT = 810;

        const ResizeObserverPoly = (window as any).ResizeObserver;
        const ro = new ResizeObserverPoly(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                var container = entries[i].target;
                var iframe = container.querySelector('iframe');
                if (!iframe) return;

                var w = entries[i].contentBoxSize ? entries[i].contentBoxSize[0].inlineSize : container.offsetWidth;
                var h = entries[i].contentBoxSize ? entries[i].contentBoxSize[0].blockSize : container.offsetHeight;
                var scale = Math.min(w / IFRAME_WIDTH, h / IFRAME_HEIGHT);
                iframe.style.setProperty('--iframe-scale', String(scale));
            }
        });

        for (var i = 0; i < iframes.length; i++) {
            ro.observe(iframes[i]);
        }
    }

    sanitizar(url) {
        return this.Sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
