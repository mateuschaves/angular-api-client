import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter',
  pure: false
})
export class SelectFilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    if(term == 'Ativo' || term == 'Inativo' )
    {
      return items.filter(item => item.aluno.status.indexOf(term) !== -1);
    }else if(term == 'Pago' || term == 'Vencido' || term == 'A vencer')
    {
      return items.filter(item => item.mensalidade.status.indexOf(term) !== -1);
    }else
    {
      return items;
    }
}

}
