import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { NotificationService } from '../../services/notification.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-censo-temporario',
  templateUrl: './censo-temporario.component.html',
  imports: [CommonModule],
  standalone: true
})
export class CensoTemporarioComponent implements OnInit {
  censoTemporario: any[] = [];

  constructor(
    private configService: ConfigService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.carregarCensoTemporario();
  }

  carregarCensoTemporario() {
    this.configService.getCensoTemporario().subscribe({
      next: (response: any) => { 
        if (response.status === 'success') {
          this.censoTemporario = response.data; 
          console.log(response.data);
          this.notificationService.showNotification('Censo temporário carregado com sucesso!', 'Fechar', 3000);
        } else {
          this.notificationService.showNotification('Erro ao carregar censo temporário.', 'Fechar', 3000);
        }
      },
      error: (error) => {
        console.error('Erro ao carregar censo temporário', error);
        this.notificationService.showNotification('Erro ao carregar censo temporário.', 'Fechar', 3000);
      },
    });
  }

  confirmarCadastro() {
    this.configService.confirmarCadastroCenso().subscribe({
      next: (response: any) => {
        console.log('Censo confirmado com sucesso', response);

        this.notificationService.showNotification(
          `Censo confirmado: ${response.novos_pacientes} novos pacientes e ${response.novas_internacoes} novas internações cadastradas.`,
          'Fechar', 
          3000 
        );

        this.carregarCensoTemporario(); 
      },
      error: (error) => {
        console.error('Erro ao confirmar censo', error);
        this.notificationService.showNotification('Erro ao confirmar censo.', 'Fechar', 3000); 
      },
    });
  }

  limparTabela(){
    this.configService.limparTabela().subscribe({
      next: (response: any) => {

        if (response.status === 'success') {
          console.log(response.data);
          this.notificationService.showNotification(response.data, 'Fechar', 3000);
          this.carregarCensoTemporario();
        } else {
          this.notificationService.showNotification('Erro ao limpar tabela.', 'Fechar', 3000);
        }

      },
      error: (error) => {
        console.error('Erro ao limpar tabela', error);
        this.notificationService.showNotification('Erro ao limpar tabela.', 'Fechar', 3000); 
      },
    });
  }

  excluirInvalidos(){
    this.configService.excluirInvalidos().subscribe({
      next: (response: any) => {
        
        if (response.status === 'success') {
          console.log(response.data);
          this.notificationService.showNotification(response.data, 'Fechar', 3000);
          this.carregarCensoTemporario();
        } else {
          this.notificationService.showNotification('Erro ao excluir inválidos.', 'Fechar', 3000);
        }

      },
      error: (error) => {
        console.error('Erro ao confirmar censo', error);
        this.notificationService.showNotification('Erro ao excluir inválidos.', 'Fechar', 3000); 
      },
    });
  }

}
