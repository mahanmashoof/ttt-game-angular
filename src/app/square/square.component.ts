import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button *ngIf="value == 'X'">{{ value }}</button>
    <button *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; background-color: #fdb924; color: #fff; font-family: Mansalva }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O'

}
