import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsManagementComponent } from './solutions-management.component';

describe('IssuesManagementComponent', () => {
  let component: SolutionsManagementComponent;
  let fixture: ComponentFixture<SolutionsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
