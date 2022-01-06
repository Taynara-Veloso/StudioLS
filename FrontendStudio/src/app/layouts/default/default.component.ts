import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  opened: boolean = true
  constructor(private router: Router,
    private ngZone: NgZone) { }

  ngOnInit(): void {
  }

}
