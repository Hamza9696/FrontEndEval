import {Invoice} from "../shared/models/invoice";
import {Client} from "../shared/models/client";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../shared/services/client.service";
import {InvoiceService} from "../shared/services/invoice.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})
export class ClientDetailComponent implements OnInit {
  clientId: number;
  client: Client = {fullName: '', email: ''};
  invoices: Invoice[] = [];

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private invoiceService: InvoiceService
  ) {
  }

  ngOnInit() {
    this.clientId = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClientById(this.clientId).subscribe({
      next: (client) => {
        this.client = client;
      },
      error: (error) => console.error('Error fetching client details:', error)
    });
    this.invoiceService.getInvoicesByClientId(this.clientId).subscribe({
      next: (invoices) => {
        this.invoices = invoices;
      },
      error: (error) => console.error('Error fetching invoices:', error)
    });
  }

}
