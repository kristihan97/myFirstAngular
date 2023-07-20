import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss'],
})
export class ExerciseFormComponent implements OnInit {
  [key: string]: any;
  data: any;
  forces: any;
  categories: any;
  selected: any;
  selections: any = {};

  firstCtrl = this.formBuilder.group({
    //firstStep: ['', Validators.required],
    firstStep: ['', Validators.required],
  });

  secCtrl = this.formBuilder.group({
    secStep: ['', Validators.required],
  });
  isEditable = false;

  constructor(
    private apiGetter: ApiGetterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.apiGetter.getData().subscribe((data) => {
      this.data = data;
      this.forces = data['forces'];
      this.categories = data['categories'];
      // console.log(data);
      console.log(typeof this.categories);
      console.log(Array.isArray(this.forces));
    });

    this.firstCtrl.get('firstStep')!.valueChanges.subscribe((value) => {
      console.log('First step value changed: ', value);
    });

    this.secCtrl.get('secStep')!.valueChanges.subscribe((value) => {
      console.log('Second step value changed: ', value);
    });
    console.log(this);
  }
  nextStep(stepper: MatStepper, controlName: string): void {
    const group = this[controlName] as FormGroup;
    const controlNames: { [key: string]: string } = {
      firstCtrl: 'firstStep',
      secCtrl: 'secStep',
    };
    if (group.valid) {
      this.selections[controlName] = group.get(
        controlNames[controlName]
      )?.value;
      stepper.next();
    }
    console.log(this.selections);
  }
}
