import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    declarations: [IconComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [IconComponent],
})
export class IconModule {}
