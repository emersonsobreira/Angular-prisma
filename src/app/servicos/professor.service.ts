import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface professor {
  id?: number
  nome: string
}

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {

  listaProfessor: any = []
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addProfessor(professor: professor) {
    this.listaProfessor.push(professor);
         
  }
  getProfessor() {
    return this.http.get('http://localhost:3000/professores/listaProfessor')
  }


  createProfessor(dados: any) {
    return this.http.post('http://localhost:3000/professores', dados)
  }
  
  }




