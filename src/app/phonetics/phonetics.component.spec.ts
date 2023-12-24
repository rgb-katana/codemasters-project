import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneticsComponent } from './phonetics.component';

describe('PhoneticsComponent', () => {
  let component: PhoneticsComponent;
  let fixture: ComponentFixture<PhoneticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneticsComponent]
    });
    fixture = TestBed.createComponent(PhoneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
