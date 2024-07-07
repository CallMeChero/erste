import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomIcon, SIDEMENU_ICONS } from '../../../../../public/icons_export';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sidebar.component.html',
  providers: [HttpClient],
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(
    readonly _matIconRegistry: MatIconRegistry,
    readonly _domSanitizer: DomSanitizer
  ) {
    SIDEMENU_ICONS.forEach((icon: CustomIcon) => {
      _matIconRegistry.addSvgIcon(
        icon.name,
        _domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    }) 
  }
}
