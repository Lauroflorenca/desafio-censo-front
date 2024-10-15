import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadCensoComponent } from './components/upload-censo/upload-censo.component';
import { ListarPacientesComponent } from './components/listar-pacientes/listar-pacientes.component';
import { InternacoesPacienteComponent } from './components/internacoes-paciente/internacoes-paciente.component';
import { CensoTemporarioComponent } from './components/censo-temporario/censo-temporario.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload-censo', component: UploadCensoComponent },
  { path: 'listar-pacientes', component: ListarPacientesComponent },
  { path: 'paciente/:id/internacoes', component: InternacoesPacienteComponent },
  { path: 'censo-temporario', component: CensoTemporarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
