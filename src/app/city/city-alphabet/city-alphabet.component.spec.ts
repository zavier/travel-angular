import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAlphabetComponent } from './city-alphabet.component';

describe('CityAlphabetComponent', () => {
  let component: CityAlphabetComponent;
  let fixture: ComponentFixture<CityAlphabetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAlphabetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
