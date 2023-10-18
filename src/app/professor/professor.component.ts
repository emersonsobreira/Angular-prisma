import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProfessorDataSource, ProfessorItem } from './professor-datasource';
import { ProfessorService, professor } from '../servicos/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})


export class professorComponent {

  @ViewChild(MatTable) minhaTabela!: MatTable<any>;

  colunasTabela = ['nome']


  constructor(
    protected service: ProfessorService
  ){
    service.getProfessor().subscribe(dados => {
      service.listaProfessor = dados
    })
  }
  cadastrarProfessor(professor: professor){
    this.service.addProfessor(professor)
  }
}

