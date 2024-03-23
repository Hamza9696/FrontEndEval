import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Client} from "../shared/models/client";
import {ClientService} from "../shared/services/client.service";


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {
  client: Client = {
    fullName: '',
    email: ''
  };

  constructor(private clientService: ClientService, private router: Router) {
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission
    if (this.client.fullName && this.client.email) {
      this.clientService.addClient(this.client).subscribe({
        next: (client) => {
          console.log('Added client', client);
          this.router.navigate(['/']); // Navigate to the desired route
          // Handle success, e.g., navigating back to the clients list or clearing the form
        },
        error: (error) => {
          console.error('Error adding client', error);
          // Handle error
        }
      });
    }
  }
}
