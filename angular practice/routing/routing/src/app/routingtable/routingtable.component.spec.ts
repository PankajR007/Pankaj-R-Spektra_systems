import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingtableComponent } from './routingtable.component';

describe('RoutingtableComponent', () => {
  let component: RoutingtableComponent;
  let fixture: ComponentFixture<RoutingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
