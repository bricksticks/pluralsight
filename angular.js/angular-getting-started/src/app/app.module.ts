import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// This is our component.
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductDetailGuard } from './products/product-detail/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';



// Modules also seem to be related to dependency injection
// In what way is currently not yet clear to me.
@NgModule({
  // In the declarations we declare what parts are declared by our component to be referenced
  // elsewhere. It's almost like we define what is allowed to be injected by others. 
  // I.e. a binding to the types our module exports.
  declarations: [
    AppComponent, 
    WelcomeComponent, 
    ProductListComponent, 
    ConvertToSpacesPipe, 
    StarComponent, 
    ProductDetailComponent],
  // BrowserModule brings in useful directives like *ngIf and *ngFor (static directives)
  // FormsModule brings in useful directives like [(ngModel)] for two-way bindings
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot([
      // The order here matches. Whatever matches first will be selected by the router.
      {path: 'products', component: ProductListComponent},
      // Really read the path like a path where parts of the path can be parameters... (e.g. :id)
      {
        path: 'products/:productCode', 
        canActivate: [ProductDetailGuard], 
        component: ProductDetailComponent
      },
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
