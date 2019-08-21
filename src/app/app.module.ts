import { HttpClientModule } from '@angular/common/http';
import { CreditAcService } from './credit-ac.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ReviewPaymentComponent } from './review-payment/review-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    PaymentListComponent,
    CreatePaymentComponent,
    OrderSuccessComponent,
    ReviewPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path : '', component: HomeComponent},
      { path : 'payment-list', component: PaymentListComponent},
      { path : 'create-payment', component: CreatePaymentComponent},
      { path : 'payment-success', component: OrderSuccessComponent},
      { path : 'review-success', component: ReviewPaymentComponent}
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CreditAcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
