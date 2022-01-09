import { TransferenciaService } from './../services/transferencia.service';
import { Transfer } from './../model/transferencia';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  public transferencias: Transfer[];

  constructor(private transferService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferencias = this.transferService.getTransfer;
  }

}
