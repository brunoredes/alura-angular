import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  public valor: number;
  public destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  public transferir(): void {
    console.log('transferiuuuuu');
    console.log(`Valor: ${this.valor}`);
    console.log(`Destino: ${this.destino}`);
  }

}
