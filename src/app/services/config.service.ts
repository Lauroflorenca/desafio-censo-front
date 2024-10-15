import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  getApiUrl(): string {
    return 'http://localhost:8000/api';
  }

  getCensoTemporario() {
    const apiUrl = this.getApiUrl();
    return this.http.get(`${apiUrl}/censo/temporarios`);
  }
  
  confirmarCadastroCenso() {
    const apiUrl = this.getApiUrl();
    return this.http.post(`${apiUrl}/censo/confirmar-cadastro`, {});
  }

  limparTabela() {
    const apiUrl = this.getApiUrl();
    return this.http.post(`${apiUrl}/censo/limpa-tudo`, {});
  }

  excluirInvalidos() {
    const apiUrl = this.getApiUrl();
    return this.http.post(`${apiUrl}/censo/confirmar-cadastro`, {});
  }

  getPacientes(){
    const apiUrl = this.getApiUrl();
    return this.http.get(`${apiUrl}/pacientes`); 
  }

  getInternacoes(pacienteId: number){
    const apiUrl = this.getApiUrl();
    return this.http.get(`${apiUrl}/paciente/${pacienteId}/internacoes`); 
  }
  
}
