import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './core/components/master-layout/master-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MasterLayoutComponent,
        children: []
    }
];
