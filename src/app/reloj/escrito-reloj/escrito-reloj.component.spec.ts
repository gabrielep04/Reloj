import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritoRelojComponent } from './escrito-reloj.component';

describe('EscritoRelojComponent', () => {
  let component: EscritoRelojComponent;
  let fixture: ComponentFixture<EscritoRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscritoRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscritoRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
