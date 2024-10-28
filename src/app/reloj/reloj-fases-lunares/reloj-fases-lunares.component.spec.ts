import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojFasesLunaresComponent } from './reloj-fases-lunares.component';

describe('RelojFasesLunaresComponent', () => {
  let component: RelojFasesLunaresComponent;
  let fixture: ComponentFixture<RelojFasesLunaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelojFasesLunaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojFasesLunaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
