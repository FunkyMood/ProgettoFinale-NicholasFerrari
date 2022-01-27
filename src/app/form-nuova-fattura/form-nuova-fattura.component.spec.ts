import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuovaFatturaComponent } from './form-nuova-fattura.component';

describe('FormNuovaFatturaComponent', () => {
  let component: FormNuovaFatturaComponent;
  let fixture: ComponentFixture<FormNuovaFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuovaFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuovaFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
