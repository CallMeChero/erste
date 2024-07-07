import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './core/layout/master-layout/master-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MasterLayoutComponent,
        children: []
    }
];
