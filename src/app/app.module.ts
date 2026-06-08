import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { IconModule } from './components/icon/icon.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NavbarModule, FooterModule, IconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
