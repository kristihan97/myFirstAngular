import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss'],
  standalone: true,
  imports: [],
})
export class ExerciseFormComponent implements OnInit {
  data: any;

  constructor(private apiGetter: ApiGetterService) {}

  ngOnInit(): void {
    this.apiGetter.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}
