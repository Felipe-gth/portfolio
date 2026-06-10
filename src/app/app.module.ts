import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconModule } from './components/icon/icon.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [AppComponent, NavbarComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, IconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
