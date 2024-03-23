import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Invoice} from "../shared/models/invoice"; // This service needs to be created
import {InvoiceService} from "../shared/services/invoice.service";


@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent {
  invoice: Invoice = {
    amount: null,
    status: '',
    client_id: null
  };
  clientId: number;

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientId = +this.route.snapshot.paramMap.get('id');
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Submitting invoice with client ID:', this.clientId);
    this.invoice.client_id = this.clientId; // Add this line if not already present
    this.invoiceService.createInvoice(this.clientId, this.invoice).subscribe({
      next: (response) => {
        this.router.navigate(['/', this.clientId]);

      },
      error: (error) => {
        console.error('Error creating invoice:', error);
      }
    });
  }


}
