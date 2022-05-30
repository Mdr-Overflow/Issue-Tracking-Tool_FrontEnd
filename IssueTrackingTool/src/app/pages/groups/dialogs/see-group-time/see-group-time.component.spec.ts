import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeGroupTimeComponent } from './see-group-time.component';

describe('SeeGroupTimeComponent', () => {
  let component: SeeGroupTimeComponent;
  let fixture: ComponentFixture<SeeGroupTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeGroupTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeGroupTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
