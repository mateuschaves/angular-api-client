import { IStudent } from './../students';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class StudentsService {

  public alunos = [];

  // LIST STUDENTS URL
  public list_students_url = 'http://localhost:8000/api/aluno/list';

  constructor(private http: HttpClient) { }


  // Pega todos os alunos.
  getAlunos(): Observable<IStudent[]>
  {
      return this.http.get<IStudent[]>(this.list_students_url)
                      .catch(this.errorHandler);
  }




  errorHandler(error: HttpErrorResponse)
  {
      return Observable.throw(error.message || "Server error");
  }

}
