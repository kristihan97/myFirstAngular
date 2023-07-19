import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    CommonModule,
  ],
})
export class BasicInputComponent implements OnInit {
  myString: string = '{"name": "John", "age": 30, "city": "New York"}';
  ngOnInit(): void {
    let myObj = JSON.parse(this.myString);
    let newStr = JSON.stringify(myObj);
    // console.log(this.myString);
    // console.log(newStr);
  }
}
