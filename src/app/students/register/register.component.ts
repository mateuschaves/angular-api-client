import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public atividades = <any>[];
  public combos = <any>[];
  public errorMsg;

  constructor(private service: StudentsService) {
    this.service.getAtividades()
    .subscribe( data   =>  this.atividades = data,
                error  =>  this.errorMsg = error);

    this.service.getCombos()
    .subscribe( data   =>  this.combos = data,
                error  =>  this.errorMsg = error);
    //console.log(this.atividades);
   }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

}
