import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClientCreateComponent} from './client-create/client-create.component';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {InvoiceCreateComponent} from './invoice-create/invoice-create.component';
import {ClientDetailComponent} from "./client-details/client-details.component";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http"; // Import ReactiveFormsModule
import {MatIconModule} from '@angular/material/icon';
import {authInterceptor} from "./shared/config/auth.interceptor";


const routes: Routes = [
  {path: '', component: ClientsListComponent},
  {path: 'create', component: ClientCreateComponent},
  {path: ':id', component: ClientDetailComponent},
  {path: ':id/invoices/add', component: InvoiceCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientDetailComponent,
    ClientsListComponent,
    InvoiceCreateComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), HttpClientModule, MatIconModule
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor])),],
  bootstrap: [AppComponent]
})
export class AppModule {
}
