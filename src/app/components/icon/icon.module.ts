import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from './icon.component';

const routes: Routes = [];

@NgModule({
    declarations: [IconComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [IconComponent],
})
export class IconModule {}
