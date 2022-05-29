import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLeaderComponent } from './change-leader.component';

describe('ChangeLeaderComponent', () => {
  let component: ChangeLeaderComponent;
  let fixture: ComponentFixture<ChangeLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
