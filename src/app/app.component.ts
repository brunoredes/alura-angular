import { TransferenciaService } from './services/transferencia.service';
import { Transfer } from './model/transferencia';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferService: TransferenciaService) { }

  public transfer(event): void {
    this.transferService.transfer(event);
  }
}
