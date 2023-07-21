import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

interface Selections {
  firstCtrl?: string;
  secCtrl?: string;
}

interface ExerciseData {
  forces: string[];
  categories: string[];
  [key: string]: string | string[];
}

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss'],
})
export class ExerciseFormComponent implements OnInit {
  data: ExerciseData | undefined;
  forces: string[] | undefined;
  categories: string[] | undefined;
  selected: string | undefined;
  selections: Selections = {};

  firstCtrl: FormGroup;
  secCtrl: FormGroup;
  isEditable = false;

  constructor(
    private apiGetter: ApiGetterService,
    private formBuilder: FormBuilder
  ) {
    this.firstCtrl = this.formBuilder.group({
      firstStep: ['', Validators.required],
    });

    this.secCtrl = this.formBuilder.group({
      secStep: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.apiGetter.getData().subscribe((data: ExerciseData) => {
      this.data = data;
      this.forces = data.forces;
      this.categories = data.categories;
      console.log(typeof this.categories);
      console.log(Array.isArray(this.forces));
    });

    this.firstCtrl.get('firstStep')!.valueChanges.subscribe((value: string) => {
      console.log('First step value changed: ', value);
    });

    this.secCtrl.get('secStep')!.valueChanges.subscribe((value: string) => {
      console.log('Second step value changed: ', value);
    });
  }

  nextStep(stepper: MatStepper, controlName: keyof Selections): void {
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
