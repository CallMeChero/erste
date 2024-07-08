import { Injectable } from '@angular/core';
import { ISideMenuItem } from '../interfaces/sidemenu';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  // this two are static so no need for async
  homeItem: ISideMenuItem = {
    name: 'Logo',
    filePath: 'icons/erste_logo.svg',
    urlPath: '',
    isActive: true
  };
  userItem: ISideMenuItem = {
    name: 'Account',
    filePath: 'icons/account_circle.svg',
    urlPath: '',
    isActive: true
  };
  
  // this will LATER ON be async because of authorization
  navItems: BehaviorSubject<ISideMenuItem[]> = new BehaviorSubject<ISideMenuItem[]>([
   {
    name: 'IOP',
    filePath: 'icons/folder.svg',
    urlPath: 'iop',
    isActive: true
   },
   {
    name: 'Zadaci',
    filePath: 'icons/checklist.svg',
    urlPath: '',
    isActive: true
   },
   {
    name: 'Izvještaji',
    filePath: 'icons/vector.svg',
    urlPath: '',
    isActive: true
   }
  ]);
  navItems$: Observable<ISideMenuItem[]> = this.navItems.asObservable();
}
