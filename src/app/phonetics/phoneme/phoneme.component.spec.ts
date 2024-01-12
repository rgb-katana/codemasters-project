import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemeComponent } from './phoneme.component';

describe('PhonemeComponent', () => {
  let component: PhonemeComponent;
  let fixture: ComponentFixture<PhonemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonemeComponent]
    });
    fixture = TestBed.createComponent(PhonemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
