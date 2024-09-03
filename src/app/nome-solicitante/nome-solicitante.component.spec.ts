import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeSolicitanteComponent } from './nome-solicitante.component';

describe('NomeSolicitanteComponent', () => {
  let component: NomeSolicitanteComponent;
  let fixture: ComponentFixture<NomeSolicitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeSolicitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
