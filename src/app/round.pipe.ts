import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'round'
})
// creates a custom pipe which in this case will perform Math.floor on whatever 
// value is in the parameter.
export class RoundPipe implements PipeTransform {

  transform(value: number, args?: any): number {

    return Math.floor(value);
  }

}
