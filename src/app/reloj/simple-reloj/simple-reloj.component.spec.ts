import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRelojComponent } from './simple-reloj.component';

describe('SimpleRelojComponent', () => {
  let component: SimpleRelojComponent;
  let fixture: ComponentFixture<SimpleRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
