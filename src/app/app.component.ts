import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'gh-pages';
  // ng build --output-path docs --base-href /angular-gh-pages/

  navigate(): void {
    console.log('AppComponent ~ navigate ~ navigate:');
  }

  nav(link: string): void {
    console.log('AppComponent ~ nav ~ link:', link);
    this.router.navigate([link]);
  }
}
