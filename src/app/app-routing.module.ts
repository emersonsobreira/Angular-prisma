import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
//import { ProfessorComponent } from './professor/professor.component';



const routes: Routes = [
  {path: '', component: AlunosComponent},
  {path: 'cadastro', component: CadastroAlunoComponent},
 // {path: 'professor', component: ProfessorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
