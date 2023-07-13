import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-fancy-example',
  templateUrl: './card-fancy-example.component.html',
  styleUrls: ['./card-fancy-example.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardFancyExampleComponent {}
