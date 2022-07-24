import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupComponentComponent } from './sup-component.component';

describe('SupComponentComponent', () => {
  let component: SupComponentComponent;
  let fixture: ComponentFixture<SupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
