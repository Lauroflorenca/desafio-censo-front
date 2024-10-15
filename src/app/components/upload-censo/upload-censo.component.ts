import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service'; 

@Component({
  selector: 'app-upload-censo',
  templateUrl: './upload-censo.component.html',
})
export class UploadCensoComponent {
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private router: Router,
    private notificationService: NotificationService 
  ) {}

  onFileUpload(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('csv_file', file);

    const apiUrl = this.configService.getApiUrl();
    this.http.post(`${apiUrl}/upload-csv`, formData)
      .subscribe({
        next: (response) => {
          console.log('Upload realizado com sucesso', response);
          this.notificationService.showNotification('Upload realizado com sucesso!', 'Fechar', 3000); 
          this.router.navigate(['/censo-temporario']);
        },
        error: (error) => {
          console.error('Erro no upload', error);
          this.notificationService.showNotification('Erro no upload do arquivo.', 'Fechar', 3000);
        },
      });
  }
}
