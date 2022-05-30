import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoutionComponent } from './add-soution.component';

describe('AddSoutionComponent', () => {
  let component: AddSoutionComponent;
  let fixture: ComponentFixture<AddSoutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSoutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
