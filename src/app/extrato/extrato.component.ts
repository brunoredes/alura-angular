import { Component, OnDestroy, OnInit } from '@angular/core';
import { Transfer } from './../model/transferencia';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  public transferencias: Transfer[];

  constructor(private transferService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferService.getTransfers()
      .subscribe((data: Transfer[]) => this.transferencias = data);
  }

}
