import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
declare var $:any;

@Component({
  selector: 'list-alunos',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit  {

  public students = <any>[];
  public errorMsg;

  isActive(value)
  {
    if(value.aluno.status == 'Ativo')
    {
        return value;
    }
  }

  constructor(private service: StudentsService) { 
      this.service.getAlunos()
      .subscribe( data   =>  this.students = data,
                  error  =>  this.errorMsg = error);
  }

  ngOnInit(){
    {
      $('table').tablesort();
      $('.ui.dropdown').dropdown();
    }
  }
  
}
