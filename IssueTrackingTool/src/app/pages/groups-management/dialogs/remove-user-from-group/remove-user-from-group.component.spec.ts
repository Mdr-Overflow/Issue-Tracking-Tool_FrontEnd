import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserFromGroupComponent } from './remove-user-from-group.component';

describe('RemoveUserFromGroupComponent', () => {
  let component: RemoveUserFromGroupComponent;
  let fixture: ComponentFixture<RemoveUserFromGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveUserFromGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUserFromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
