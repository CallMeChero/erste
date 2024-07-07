import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopListComponent } from './iop-list.component';

describe('IopListComponent', () => {
  let component: IopListComponent;
  let fixture: ComponentFixture<IopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IopListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
