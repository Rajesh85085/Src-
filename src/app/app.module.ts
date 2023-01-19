import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsComponent } from './lists/lists.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './highlight.pipe';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AddloanComponent } from './loans/addloan/addloan.component';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    HighlightPipe,
    LoansComponent,
    LoanTypesComponent,
    AddloanComponent
  ],
  imports: [
    BrowserModule,   
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
