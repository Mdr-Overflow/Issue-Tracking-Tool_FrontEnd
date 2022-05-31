import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSolutionsComponent } from './view-solutions.component';

describe('ViewSolutionsComponent', () => {
  let component: ViewSolutionsComponent;
  let fixture: ComponentFixture<ViewSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
