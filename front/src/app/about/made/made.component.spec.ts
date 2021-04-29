import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeComponent } from './made.component';

describe('MadeComponent', () => {
  let component: MadeComponent;
  let fixture: ComponentFixture<MadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
