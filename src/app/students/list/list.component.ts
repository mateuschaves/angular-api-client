import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit  {

  public students = [];
  public errorMsg;

  public class_th_nome ='';
  public class_th_status ='';
  public class_th_mensalidade ='';

  showDropDown(): void{
     $('.ui.selection.dropdown').dropdown();
  }

  sortName(): void{
    switch(this.class_th_nome)
      {
          case '':
            this.class_th_nome = 'sorted ascending';
            break;
          case 'sorted ascending':
            this.class_th_nome = 'sorted descending';
            break;
          case 'sorted descending':
            this.class_th_nome = 'sorted ascending';
      }
  }

  
  constructor(private service: StudentsService) { 
      this.service.getAlunos()
      .subscribe( data => this.students = data,
                  error => this.errorMsg = error);
    
  }


  ngOnInit(){
    {
      $('table').tablesort()
    }
  }
  
}
