import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.scss'
})
export class MasterLayoutComponent {
  
}
