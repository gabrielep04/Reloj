import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRelojComponent } from './barra-reloj.component';

describe('BarraRelojComponent', () => {
  let component: BarraRelojComponent;
  let fixture: ComponentFixture<BarraRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
