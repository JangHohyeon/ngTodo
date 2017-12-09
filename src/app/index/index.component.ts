import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
  ngOnInit() {
  }

}
