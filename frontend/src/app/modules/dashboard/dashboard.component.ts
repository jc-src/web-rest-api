import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }


  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular 12.2.0' },
        { name: 'Angular CLI 12.2.0' },
        { name: 'Font Awesome 5.15.4' },
        { name: 'Bootstrap 5.1.0' },
      ],
      backend: [
        { name: 'GoLang' },
      ]
    };

  }

}
