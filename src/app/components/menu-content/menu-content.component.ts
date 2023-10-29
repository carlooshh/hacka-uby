import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css'],
})
export class MenuContentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToIdeaPage(): void {
    this.router.navigate(['idea']);
  }
  goToManagerPage(): void {
    this.router.navigate(['manager']);
  }
}
