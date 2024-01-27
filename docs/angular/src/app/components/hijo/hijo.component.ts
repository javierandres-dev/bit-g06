import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  @Input() colorFavorito: string = '';

  @Output() agregarElementoEvento: EventEmitter<string> =
    new EventEmitter<string>();

  agregarElemento() {
    this.agregarElementoEvento.emit('pepita');
  }
}
