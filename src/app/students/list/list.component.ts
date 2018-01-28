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

  showDropDown(): void{
     $('.ui.selection.dropdown').dropdown();
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
