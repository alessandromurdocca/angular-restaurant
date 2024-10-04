import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineWithTextComponent } from './line-with-text.component';

describe('LineWithTextComponent', () => {
  let component: LineWithTextComponent;
  let fixture: ComponentFixture<LineWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineWithTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
