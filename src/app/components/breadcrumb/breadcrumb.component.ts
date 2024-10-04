import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent implements OnInit {
  routesUrl: string[] | undefined;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.getCurrentPath();
  }

  getCurrentPath() {
    console.log(this.router.url, 'router breadcrumb');
    this.routesUrl = this.router.url.split('/');
    this.routesUrl = this.routesUrl.filter((url) => url !== '');
    console.log(this.routesUrl, 'routes url');
  }
}
