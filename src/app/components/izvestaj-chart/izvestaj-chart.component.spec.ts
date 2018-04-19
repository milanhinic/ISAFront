import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestajChartComponent } from './izvestaj-chart.component';

describe('IzvestajChartComponent', () => {
  let component: IzvestajChartComponent;
  let fixture: ComponentFixture<IzvestajChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzvestajChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvestajChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
