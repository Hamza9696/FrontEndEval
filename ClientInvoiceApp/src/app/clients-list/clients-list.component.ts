import {Component, OnInit} from '@angular/core';
import {ClientService} from '../shared/services/client.service'; // Update the path as necessary
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})

export class ClientsListComponent implements OnInit {
  clients = [];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe({
      next: (clients) => this.clients = clients,
      error: (error) => console.error(error),
    });
  }
}
