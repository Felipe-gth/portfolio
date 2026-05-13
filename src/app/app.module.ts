import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './Home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HomeModule, ProjectsModule, NavbarModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
