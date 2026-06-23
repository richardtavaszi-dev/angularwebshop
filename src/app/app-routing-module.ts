import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Beimportáljuk a te meglévő komponenseidet
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Product } from './product/product'; // a te mappád neve alapján
import { Create } from './create/create';
import { Delete } from './delete/delete';

const routes: Routes = [
  // Ha üres a cím, dobjon a listára
  { path: '', redirectTo: '/list', pathMatch: 'full' }, 
  
  // A feladat által kért 5 útvonal:
  { path: 'list', component: List },
  { path: 'cart', component: Cart },
  { path: 'product/:id', component: Product }, // ide jön majd az id paraméter
  { path: 'create', component: Create },
  { path: 'delete', component: Delete },

  // Ha bármi mást ír be, vigye a listára
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }