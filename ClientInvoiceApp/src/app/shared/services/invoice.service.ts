import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invoice} from "../models/invoice";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private SUPABASE_URL = `${environment.baseUrl}invoice`;

  constructor(private http: HttpClient) {
  }

  createInvoice(clientId: number, invoiceData: Invoice): Observable<any> {
    const invoice = {...invoiceData, client_id: clientId}
    return this.http.post<Invoice>(this.SUPABASE_URL, invoice);
  }

  getInvoicesByClientId(client_id: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.SUPABASE_URL}?client_id=eq.${client_id}`);
  }
}
