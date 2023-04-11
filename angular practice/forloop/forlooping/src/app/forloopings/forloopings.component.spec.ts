import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopingsComponent } from './forloopings.component';

describe('ForloopingsComponent', () => {
  let component: ForloopingsComponent;
  let fixture: ComponentFixture<ForloopingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForloopingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForloopingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
