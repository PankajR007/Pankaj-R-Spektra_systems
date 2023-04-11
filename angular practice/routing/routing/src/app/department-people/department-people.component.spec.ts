import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPeopleComponent } from './department-people.component';

describe('DepartmentPeopleComponent', () => {
  let component: DepartmentPeopleComponent;
  let fixture: ComponentFixture<DepartmentPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
