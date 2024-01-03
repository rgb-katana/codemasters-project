import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenseComponent } from './tense.component';

describe('TenseComponent', () => {
  let component: TenseComponent;
  let fixture: ComponentFixture<TenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenseComponent]
    });
    fixture = TestBed.createComponent(TenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
