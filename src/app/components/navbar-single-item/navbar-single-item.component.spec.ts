import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSingleItemComponent } from './navbar-single-item.component';

describe('NavbarSingleItemComponent', () => {
  let component: NavbarSingleItemComponent;
  let fixture: ComponentFixture<NavbarSingleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSingleItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
