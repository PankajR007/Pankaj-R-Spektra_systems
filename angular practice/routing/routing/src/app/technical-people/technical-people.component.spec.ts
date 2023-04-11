import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalPeopleComponent } from './technical-people.component';

describe('TechnicalPeopleComponent', () => {
  let component: TechnicalPeopleComponent;
  let fixture: ComponentFixture<TechnicalPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
