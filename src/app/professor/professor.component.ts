// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfessorService } from '../servicos/professor.service';
//import { Router } from 'express';

@Component({
  selector: 'app-professor',
  templateUrl:'./professor.component.html',
  styleUrls: ['./professor.component.scss']
})

export class ProfessorComponent  implements OnInit {

formularioProfessor!: any
listaProfessor!: any

    
    constructor(
      private router: Router,
      private fb: FormBuilder,
      // private service: ProfessorService,
      private ProfessorService: ProfessorService,
      private _snackBar: MatSnackBar
    ) {
      this.gerarForm()
    }
    gerarForm() {
      this.formularioProfessor = this.fb.group({
        nome: '',
      
      })
    }
    ngOnInit(): void {
      this.ProfessorService.getProfessor().subscribe(data => {
        console.log(data);
        this.listaProfessor = data
      
      })
    }
    // salvar() {
    //   console.log(this.formularioProfessor.value);
  
    //   this.service.createProfessor(this.formularioProfessor.value).subscribe({
    //     next: data => {
    //       console.log(data);
    //       this.openSnackBar('Cadastrado com sucesso!')
    //       this.router.navigateByUrl('')
    //     },
    //     error: err => { console.log("Ocorreu um erro: " + err); }
    //   })
  
    // }
  
    openSnackBar(message: string) {
      this._snackBar.open(message, 'OK');
    }
  }
  
  