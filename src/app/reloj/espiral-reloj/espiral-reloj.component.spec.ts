import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiralRelojComponent } from './espiral-reloj.component';

describe('EspiralRelojComponent', () => {
  let component: EspiralRelojComponent;
  let fixture: ComponentFixture<EspiralRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspiralRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspiralRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
