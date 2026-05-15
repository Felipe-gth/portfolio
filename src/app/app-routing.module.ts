import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsModule } from './projects/projects.module';

const routes: Routes = [
    { path: '', 
        loadChildren: () =>
            import('./Home/home.module').then((m) => m.HomeModule),
        pathMatch: 'full'
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/projects.module').then((m) => m.ProjectsModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
