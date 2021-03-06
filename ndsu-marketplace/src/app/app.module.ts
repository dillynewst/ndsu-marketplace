import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { SearchComponent } from './search/search.component';
import { ItemsComponent } from './items/items.component';
import { ItemCardComponent } from './items/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    SellComponent,
    SearchComponent,
    ItemsComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
