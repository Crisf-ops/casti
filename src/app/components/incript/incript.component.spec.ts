import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncriptComponent } from './incript.component';

describe('IncriptComponent', () => {
  let component: IncriptComponent;
  let fixture: ComponentFixture<IncriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
