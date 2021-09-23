import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexBinaryComponent } from './hex-binary.component';

describe('HexBinaryComponent', () => {
  let component: HexBinaryComponent;
  let fixture: ComponentFixture<HexBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexBinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
