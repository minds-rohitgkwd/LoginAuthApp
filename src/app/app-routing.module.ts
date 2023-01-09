import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path:'seller',
    loadChildren: () => import('./seller/seller.module').then((m) => m.SellerModule),
  },
  {
    path:'',
    loadChildren: () => import('./shopping/shopping.module').then((m) => m.ShoppingModule),
  },
  {
    path:'**',
    component: PageNotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
