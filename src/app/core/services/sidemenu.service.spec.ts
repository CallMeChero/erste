import { TestBed } from '@angular/core/testing';
import { SidemenuService } from './sidemenu.service';
import { ISideMenuItem } from '../interfaces/sidemenu';

describe('SidemenuService', () => {
  let service: SidemenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidemenuService]
    });
    service = TestBed.inject(SidemenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial home and user items', () => {
    expect(service.homeItem).toEqual({
      name: 'Logo',
      filePath: 'icons/logo.svg',
      urlPath: '',
      isActive: true
    });
    expect(service.userItem).toEqual({
      name: 'Account',
      filePath: 'icons/account_circle.svg',
      urlPath: '',
      isActive: true
    });
  });

  it('should emit initial navigation items', (done: DoneFn) => {
    service.navItems$.subscribe((items: ISideMenuItem[]) => {
      expect(items.length).toBe(3);
      expect(items[0]).toEqual({
        name: 'IOP',
        filePath: 'icons/folder.svg',
        urlPath: 'iop',
        isActive: true
      });
      expect(items[1]).toEqual({
        name: 'Zadaci',
        filePath: 'icons/checklist.svg',
        urlPath: '',
        isActive: true
      });
      expect(items[2]).toEqual({
        name: 'Izvještaji',
        filePath: 'icons/vector.svg',
        urlPath: '',
        isActive: true
      });
      done();
    });
    // Accessing private BehaviorSubject property for testing purposes only
    
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const navItemsSubject = (service as any).navItems;
    navItemsSubject.next([
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
  });

});
