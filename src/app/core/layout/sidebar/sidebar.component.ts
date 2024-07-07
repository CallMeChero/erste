import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
    _matIconRegistry.addSvgIcon(
      'account_circle',
      _domSanitizer.bypassSecurityTrustResourceUrl('icons/account_circle.svg')
    );
    _matIconRegistry.addSvgIcon(
      'erste_logo',
      _domSanitizer.bypassSecurityTrustResourceUrl('icons/logo.svg')
    );
    _matIconRegistry.addSvgIcon(
      'folder',
      _domSanitizer.bypassSecurityTrustResourceUrl('icons/folder.svg')
    );
    _matIconRegistry.addSvgIcon(
      'checklist',
      _domSanitizer.bypassSecurityTrustResourceUrl('icons/checklist.svg')
    );
    _matIconRegistry.addSvgIcon(
      'vector',
      _domSanitizer.bypassSecurityTrustResourceUrl('icons/vector.svg')
    );
  }
}
