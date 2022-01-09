import { Transfer } from './../model/transferencia';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private transferencias: Transfer[] = [];
  constructor() { }

  public transfer(transfer: Required<Transfer>): void {
    this.withdraw(transfer);
    this.transferencias.push(transfer);
  }

  private withdraw(transfer: Transfer): void {
    transfer.date = new Date();
  }

  get getTransfer() {
    return this.transferencias;
  }
}
