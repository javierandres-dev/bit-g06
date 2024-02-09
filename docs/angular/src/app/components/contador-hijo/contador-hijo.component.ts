import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador-hijo',
  standalone: true,
  imports: [],
  templateUrl: './contador-hijo.component.html',
  styleUrl: './contador-hijo.component.css',
})
export class ContadorHijoComponent {
  @Input() contador: number = 0;

  @Output() emisorEvento = new EventEmitter<number>();

  incrementarContador() {
    this.emisorEvento.emit(++this.contador);
  }

  decrementarContador() {
    this.emisorEvento.emit(--this.contador);
  }
}
