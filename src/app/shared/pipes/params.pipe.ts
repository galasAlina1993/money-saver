import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'params'})
export class ParamsPipe implements PipeTransform {
  transform(arr: Array<object>, param?: string, val?: any) {
    return !param ? arr :
      arr.filter((e) => val !== undefined ? e[param] === val : e[param]);
  }
}

