import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleFormBuilderComponent } from './example-form-builder/example-form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowErrorComponent } from './show-error/show-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleFormBuilderComponent,
    ShowErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
