import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AboutComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', redirectTo: 'products', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
