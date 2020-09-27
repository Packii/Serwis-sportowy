import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isChanged: boolean = false;

  ngOnInit(): void {
  }

  toggleChange() {
    this.isChanged = !this.isChanged;
  }

}
