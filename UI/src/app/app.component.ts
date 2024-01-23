import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UI';
}
