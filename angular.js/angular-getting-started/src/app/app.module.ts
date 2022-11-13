import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// This is our component.
import { AppComponent } from './app.component';

// Modules also seem to be related to dependency injection
// In what way is currently not yet clear to me.
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
