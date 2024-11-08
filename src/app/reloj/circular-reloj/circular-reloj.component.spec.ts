import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularRelojComponent } from './circular-reloj.component';

describe('CircularRelojComponent', () => {
  let component: CircularRelojComponent;
  let fixture: ComponentFixture<CircularRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircularRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
