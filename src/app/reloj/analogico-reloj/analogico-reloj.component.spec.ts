import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogicoRelojComponent } from './analogico-reloj.component';

describe('AnalogicoRelojComponent', () => {
  let component: AnalogicoRelojComponent;
  let fixture: ComponentFixture<AnalogicoRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalogicoRelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalogicoRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
