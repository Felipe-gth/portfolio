import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IconModule } from 'src/app/components/icon/icon.module';

import { TechnologyComponent } from './technology.component';

const routes: Routes = [];

@NgModule({
    declarations: [TechnologyComponent],
    imports: [CommonModule, RouterModule.forChild(routes), IconModule],
    exports: [TechnologyComponent],
})
export class TechnologyModule {}