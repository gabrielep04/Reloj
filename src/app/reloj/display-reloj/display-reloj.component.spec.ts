import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRelojComponent } from './display-reloj.component';

describe('DisplayRelojComponent', () => {
  let component: DisplayRelojComponent;
  let fixture: ComponentFixture<DisplayRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
