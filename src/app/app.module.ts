import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';
import { RequestGetterComponent } from './request-getter/request-getter.component';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BasicInputComponent,
    CardFancyExampleComponent,
    RequestGetterComponent,
    HttpClientModule,
    ExerciseFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
