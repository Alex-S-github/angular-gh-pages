import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gh-pages';
  // ng build --output-path docs --base-href /angular-gh-pages/

  navigate(): void {
    console.log('AppComponent ~ navigate ~ navigate:');
  }
}
