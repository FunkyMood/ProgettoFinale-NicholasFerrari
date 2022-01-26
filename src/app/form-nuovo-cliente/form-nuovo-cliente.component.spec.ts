import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuovoClienteComponent } from './form-nuovo-cliente.component';

describe('FormNuovoClienteComponent', () => {
  let component: FormNuovoClienteComponent;
  let fixture: ComponentFixture<FormNuovoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuovoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuovoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
