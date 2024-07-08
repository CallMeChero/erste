import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveIssuingComponent } from './archive-issuing.component';

describe('ArchiveIssuingComponent', () => {
  let component: ArchiveIssuingComponent;
  let fixture: ComponentFixture<ArchiveIssuingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveIssuingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveIssuingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
