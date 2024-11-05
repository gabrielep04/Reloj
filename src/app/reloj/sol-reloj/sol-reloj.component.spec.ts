import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolRelojComponent } from './sol-reloj.component';

describe('SolRelojComponent', () => {
  let component: SolRelojComponent;
  let fixture: ComponentFixture<SolRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
