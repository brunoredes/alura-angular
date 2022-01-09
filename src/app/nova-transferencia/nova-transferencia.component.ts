import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from './../model/transferencia';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() toTransfer = new EventEmitter<Transfer>();

  public valor: number;
  public destino: number | string;

  constructor(private transferService: TransferenciaService, private route: Router) { }

  ngOnInit(): void {
  }

  public transferir(): void {
    const transferObject: Transfer = { value: this.valor, recipient: this.destino };
    this.transferService.transfer(transferObject)
      .subscribe(_ => {
        this.limparCampo()
        this.route.navigateByUrl('extrato');
      },
        error => { console.error(error) });
  }


  public limparCampo(): void {
    this.valor = 0;
    this.destino = 0;
  }

}
