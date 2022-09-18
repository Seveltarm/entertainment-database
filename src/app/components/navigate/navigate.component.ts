import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent {
  @Input() navigateURL: string;

  constructor(
    private router: Router,
  ) {}

  navigate(): void {
    this.router.navigate([this.navigateURL]);
  }
}
