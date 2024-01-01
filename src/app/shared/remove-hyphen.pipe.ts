import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHyphen',
})
export class RemoveHyphenPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const stringArr = value
      .split('-')
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1));
    return stringArr.join(' ');
  }
}
