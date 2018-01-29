import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    
    if(term)
    {
      console.log(term.length);
      return items.filter(item => item.aluno.nome.indexOf(term) !== -1);
    }else
    {
      return items;
    }
}

}
