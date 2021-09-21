import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarinsumoComponent } from './registrarinsumo.component';

describe('RegistrarinsumoComponent', () => {
  let component: RegistrarinsumoComponent;
  let fixture: ComponentFixture<RegistrarinsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarinsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarinsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
