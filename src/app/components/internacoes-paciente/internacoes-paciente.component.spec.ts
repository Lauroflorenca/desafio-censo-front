import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacoesPacienteComponent } from './internacoes-paciente.component';

describe('InternacoesPacienteComponent', () => {
  let component: InternacoesPacienteComponent;
  let fixture: ComponentFixture<InternacoesPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternacoesPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternacoesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
