import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

import { NavbarModule } from '../navbar/navbar.module';

const routes: Routes = [];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NavbarModule],
  exports: [HomeComponent]
})
export class HomeModule { }
