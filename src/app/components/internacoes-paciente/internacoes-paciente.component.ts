import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { NotificationService } from '../../services/notification.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-internacoes-paciente',
  templateUrl: './internacoes-paciente.component.html',
  imports: [CommonModule],
  standalone: true
})
export class InternacoesPacienteComponent implements OnInit {
  pacienteId!: number;
  internacoes: any[] = [];
  paciente: any = [];

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.listarInternacoes(this.pacienteId);
  }

  listarInternacoes(pacienteId: number) {
    this.configService.getInternacoes(pacienteId).subscribe({
      next: (response: any) => {

        if (response.status === 'success') {
          this.internacoes = response.data.internacoes; 
          this.paciente = response.data.paciente; 
          console.log(this.paciente);
          console.log(this.internacoes);
          this.notificationService.showNotification('Internações carregados com sucesso!', 'Fechar', 3000);
        } else {
          this.notificationService.showNotification('Erro ao carregar Internações.', 'Fechar', 3000);
        }

      },
      error: (error) => {
        console.error('Erro ao carregar internações', error);
        this.notificationService.showNotification('Erro ao carregar internações.', 'Fechar', 3000);
      },
    });
  }
}
