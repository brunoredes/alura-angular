import { Transfer } from './../model/transferencia';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private transferencias: Transfer[] = [];
  private readonly url = 'http://localhost:3000/transferencias';
  constructor(
    private http: HttpClient
  ) { }

  public transfer(transfer: Transfer): Observable<Transfer> {
    this.withdraw(transfer);
    return this.http.post<Transfer>(this.url, transfer);
  }

  private withdraw(transfer: Transfer): void {
    transfer.date = new Date();
  }

  public getTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(this.url);
  }

}
