import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePlatformComponent } from './base-platform.component';

describe('BasePlatformComponent', () => {
  let component: BasePlatformComponent;
  let fixture: ComponentFixture<BasePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
