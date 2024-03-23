import {Injectable} from '@angular/core';
import {Client} from '../models/client';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private SUPABASE_URL = `${environment.baseUrl}client`;

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.SUPABASE_URL}?name`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.SUPABASE_URL, client);
  }

  getClientById(id: number): Observable<Client> {

    const url = `${this.SUPABASE_URL}?id=eq.${id}`;
    console.log('Headers:');
    return this.http.get<Client>(url).pipe(
      map(response => response[0])
    );
  }

}
