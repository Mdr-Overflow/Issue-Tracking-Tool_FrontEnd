import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIssuePriorityComponent } from './change-issue-priority.component';

describe('ChangeIssuePriorityComponent', () => {
  let component: ChangeIssuePriorityComponent;
  let fixture: ComponentFixture<ChangeIssuePriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeIssuePriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIssuePriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
