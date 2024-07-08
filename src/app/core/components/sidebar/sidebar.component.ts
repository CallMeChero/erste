import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ISideMenuItem } from '../../interfaces/sidemenu';
import { SidemenuService } from '../../services/sidemenu.service';
import { Router, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '@shared/components/base-layout.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './sidebar.component.html',
  providers: [HttpClient, Router],
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent extends BaseLayoutComponent implements OnInit{
  public homeNavItem!: ISideMenuItem;
  public userNavItem!: ISideMenuItem;
  public featureNavItems$: Observable<ISideMenuItem[]> = of([]);

  constructor(
    _matIconRegistry: MatIconRegistry,
    _domSanitizer: DomSanitizer,
    private readonly _sidemenuService: SidemenuService
  ) {
    super(
      _matIconRegistry,
      _domSanitizer
    );
    this.homeNavItem = _sidemenuService.homeItem;
    this.userNavItem = _sidemenuService.userItem;

    this.registerIcon(this.homeNavItem.name!, this.homeNavItem.filePath);
    this.registerIcon(this.userNavItem!.name!, this.userNavItem.filePath);
  }

  public ngOnInit(): void {
    // this will be role based items
    this.featureNavItems$ = this._sidemenuService.navItems$.pipe(
      tap((items: ISideMenuItem[]) => {
        items.forEach((item: ISideMenuItem) => this.registerIcon(item.name!, item.filePath!));
      })
    );
  }
}
