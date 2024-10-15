import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  imports: [CommonModule],
  standalone: true
})
export class ListarPacientesComponent implements OnInit {
  pacientes: any = [];

  constructor(
    private configService: ConfigService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.listarPacientes();
  }

  listarPacientes() {
    this.configService.getPacientes().subscribe({
      next: (response: any) => {

        if (response.status === 'success') {
          this.pacientes = response.data;
          console.log(this.pacientes);
          this.notificationService.showNotification('Pacientes carregados com sucesso!', 'Fechar', 3000);
        } else {
          this.notificationService.showNotification('Erro ao carregar Pacientes.', 'Fechar', 3000);
        }

      },
      error: (error) => {
        console.error('Erro ao carregar pacientes', error);
        this.notificationService.showNotification('Erro ao carregar pacientes.', 'Fechar', 3000);
      },
    });
  }

  irParaInternacoes(pacienteId: number) {
    this.router.navigate([`/paciente/${pacienteId}/internacoes`]);
  }
}
