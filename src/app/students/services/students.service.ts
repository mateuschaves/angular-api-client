import { ICombos } from './../../combos/combos';
import { IActivies } from './../../activities/activies';
import { IStudent } from './../students';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StudentsService {

  public alunos = <any>[];
  public atividades = <any>[];
  public combos = <any>[];

  // LIST STUDENTS URL
  public list_students_url = 'http://localhost:8000/api/aluno/list';
  // LIST ATIVIDADES
  public list_atividades_url = 'http://localhost:8000/api/atividade/list';
  // LIST COMBOS
  public list_combos_url = 'http://localhost:8000/api/atividade/combo/list';

  constructor(private http: HttpClient) { }
 
  getAlunos(): Observable<IStudent[]>
  {
      this.alunos = this.http.get<IStudent[]>(this.list_students_url)
                      .catch(this.errorHandler);
        return this.alunos;
  }

  getAtividades(): Observable<IActivies[]>
  {
      this.atividades = this.http.get<IActivies[]>(this.list_atividades_url)
                      .catch(this.errorHandler);
        return this.atividades;
  }

  getCombos(): Observable<ICombos[]>
  {
      this.combos = this.http.get<ICombos[]>(this.list_combos_url)
                      .catch(this.errorHandler);
        return this.combos;
  }

  errorHandler(error: HttpErrorResponse)
  {
      return Observable.throw(error.message || "Server error");
  }

}
