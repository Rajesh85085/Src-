import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(value:string, c:string):String{
      if(c==='chennai'){
        return 'Madras';
      }
      else{
        return c;
      }

  }

}
