import { Component } from '@angular/core';
import { ContadorHijoComponent } from '../contador-hijo/contador-hijo.component';

@Component({
  selector: 'app-contador-padre',
  standalone: true,
  imports: [ContadorHijoComponent],
  templateUrl: './contador-padre.component.html',
  styleUrl: './contador-padre.component.css',
})
export class ContadorPadreComponent {
  elDoble: number = NaN;

  recibirEmisor(num: number) {
    //console.log('num:', num);
    this.elDoble = num * 2;
  }
}
