import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeGroupUsersComponent } from './see-group-users.component';

describe('SeeGroupUsersComponent', () => {
  let component: SeeGroupUsersComponent;
  let fixture: ComponentFixture<SeeGroupUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeGroupUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeGroupUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
