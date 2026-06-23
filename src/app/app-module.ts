import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Create } from './create/create';
import { Delete } from './delete/delete';
import { Product } from './product/product';

@NgModule({
  declarations: [App, List, Cart, Create, Delete, Product],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
