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
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [AppComponent, ExerciseFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BasicInputComponent,
    CardFancyExampleComponent,
    RequestGetterComponent,
    HttpClientModule,

    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
