import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPageNotFoundComponent } from './weather-page-not-found.component';

describe('WeatherPageNotFoundComponent', () => {
  let component: WeatherPageNotFoundComponent;
  let fixture: ComponentFixture<WeatherPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
