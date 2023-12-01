import { Component} from '@angular/core';

@Component({
  // standalone:true,
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy()">+1</button>
  <button (click)="decreaseBy()">-1</button>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  public counter= 10;

  increaseBy(): void{
    this.counter++
  }

  decreaseBy(): void{
    this.counter--
  }

  resetCounter(): void{
    this.counter = 10
  }
}
