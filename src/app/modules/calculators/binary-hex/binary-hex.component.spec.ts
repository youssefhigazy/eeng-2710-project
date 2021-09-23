import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryHexComponent } from './binary-hex.component';

describe('BinaryHexComponent', () => {
  let component: BinaryHexComponent;
  let fixture: ComponentFixture<BinaryHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
