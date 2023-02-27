import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ButtonComponent } from './components/button/button.component';
import { HistoryComponent } from './components/history/history.component';
import { HeaderComponent } from './components/header/header.component';


const appRoutes: Routes = [
  { path: '', component: TransactionComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    ButtonComponent,
    HistoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
