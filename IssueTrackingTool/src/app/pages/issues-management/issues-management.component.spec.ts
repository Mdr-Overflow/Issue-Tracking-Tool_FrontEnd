import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesManagementComponent } from './issues-management.component';

describe('IssuesManagementComponent', () => {
  let component: IssuesManagementComponent;
  let fixture: ComponentFixture<IssuesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
