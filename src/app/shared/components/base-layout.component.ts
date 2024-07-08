import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    template: '',
    standalone: true,
    imports: [CommonModule, MatIconModule],
})
export class BaseLayoutComponent {

  constructor(
    readonly _matIconRegistry: MatIconRegistry,
    readonly _domSanitizer: DomSanitizer,
  ) { }

  /**
   * Method used to register custom icons
   * @param navItem ISideMenuItem
  */
  registerIcon(iconName: string, filePath: string): void {
    this._matIconRegistry.addSvgIcon(
        iconName,
        this._domSanitizer.bypassSecurityTrustResourceUrl(filePath)
      )
    }
}
