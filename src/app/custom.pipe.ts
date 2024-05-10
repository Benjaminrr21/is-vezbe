import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  //skratiti string na odredjeni broj karaktera, u nastavku dodati ...
  transform(value: string, limit?:number): string {
    if(!limit) limit = 10;
    if(limit >= value.length) return value;

    return value.substring(0,limit) + " ...";
  }

}
