import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitByColon',
})
export class SplitByColonPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const stringArr = value
      .split(':')
      .map(part => part.slice(0, 1).toUpperCase() + part.slice(1));
    let firstPart = stringArr[0]
      .split('')
      .map(letter => letter.toUpperCase())
      .join('');
    return `${firstPart} — ${stringArr[1]}`;
  }
}
