import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formataccount'})
export class FormatAccountPipe implements PipeTransform {
  transform(value: String, args: Array<string>) : any {
    return value.substr(0,3)+'-'+value.substr(4,6)+'-'+value.substr(7);
  }
}
