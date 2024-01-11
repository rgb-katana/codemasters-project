import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneticCategoryComponent } from './phonetic-category.component';

describe('PhoneticCategoryComponent', () => {
  let component: PhoneticCategoryComponent;
  let fixture: ComponentFixture<PhoneticCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneticCategoryComponent]
    });
    fixture = TestBed.createComponent(PhoneticCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
