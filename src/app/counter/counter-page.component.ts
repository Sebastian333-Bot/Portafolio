import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
button {
  padding: 8px 18px;
  margin: 5px 10px;
  width: 100px;
  background-color: #1976d2; /* Azul estilo Material */
  color: red;
  border: 100px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color:rgb(155, 192, 21);
  transform: scale(1.03);
}

button:active {
  background-color: #0d47a1;
  transform: scale(0.98);
}

  `
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(vard: number) {
    this.counter += vard;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + vard);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}







