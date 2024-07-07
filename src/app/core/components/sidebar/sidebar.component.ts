import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of, tap } from 'rxjs';
import { ISideMenuItem } from '../../models/sidemenu';
import { SidemenuService } from '../../services/sidemenu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  providers: [HttpClient],
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  public homeNavItem!: ISideMenuItem;
  public userNavItem!: ISideMenuItem;
  public featureNavItems$: Observable<ISideMenuItem[]> = of([]);

  constructor(
    private readonly _matIconRegistry: MatIconRegistry,
    private readonly _domSanitizer: DomSanitizer,
    private readonly _sidemenuService: SidemenuService
  ) {
    this.homeNavItem = _sidemenuService.homeItem;
    this.userNavItem = _sidemenuService.userItem;
  }

  public ngOnInit(): void {
    this.registerIcon(this.homeNavItem);
    this.registerIcon(this.userNavItem);
    // this will be role based items
    this.featureNavItems$ = this._sidemenuService.navItems$.pipe(
      tap((items: ISideMenuItem[]) => {
        items.forEach((item: ISideMenuItem) => this.registerIcon(item));
      })
    );
  }

  /**
   * Method used to register custom icons
   * @param navItem ISideMenuItem
  */
  private registerIcon(navItem: ISideMenuItem): void {
    this._matIconRegistry.addSvgIcon(
        navItem.name!,
        this._domSanitizer.bypassSecurityTrustResourceUrl(navItem.filePath)
      )
    }
}
