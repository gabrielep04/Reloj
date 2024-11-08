import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryRelojComponent } from './binary-reloj.component';

describe('BinaryRelojComponent', () => {
  let component: BinaryRelojComponent;
  let fixture: ComponentFixture<BinaryRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinaryRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
