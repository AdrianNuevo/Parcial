import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultacontratoComponent } from './consultacontrato.component';

describe('ConsultacontratoComponent', () => {
  let component: ConsultacontratoComponent;
  let fixture: ComponentFixture<ConsultacontratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultacontratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultacontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
