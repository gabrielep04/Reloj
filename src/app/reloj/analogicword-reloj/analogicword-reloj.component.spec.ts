import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogicwordRelojComponent } from './analogicword-reloj.component';

describe('AnalogicwordRelojComponent', () => {
  let component: AnalogicwordRelojComponent;
  let fixture: ComponentFixture<AnalogicwordRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalogicwordRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalogicwordRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
