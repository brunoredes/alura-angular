import { Transfer } from './../model/transferencia';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() toTransfer = new EventEmitter<Transfer>();

  public valor: number;
  public destino: number | string;

  constructor() { }

  ngOnInit(): void {
  }

  public transferir(): void {
    console.log('transferiuuuuu');
    this.toTransfer.emit({ value: this.valor, recipient: this.destino });

    this.limparCampo();
  }


  public limparCampo(): void {
    this.valor = 0;
    this.destino = 0;
  }

}
