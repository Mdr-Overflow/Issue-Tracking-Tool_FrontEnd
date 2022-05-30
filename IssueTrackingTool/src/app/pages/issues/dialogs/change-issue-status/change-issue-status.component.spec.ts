import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIssueStatusComponent } from './change-issue-status.component';

describe('ChangeIssueStatusComponent', () => {
  let component: ChangeIssueStatusComponent;
  let fixture: ComponentFixture<ChangeIssueStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeIssueStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIssueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
