import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BasicInputComponent,
    CardFancyExampleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
