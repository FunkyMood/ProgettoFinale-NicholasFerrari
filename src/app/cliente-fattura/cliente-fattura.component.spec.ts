import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFatturaComponent } from './cliente-fattura.component';

describe('ClienteFatturaComponent', () => {
  let component: ClienteFatturaComponent;
  let fixture: ComponentFixture<ClienteFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
