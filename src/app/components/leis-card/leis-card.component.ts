import { Component, Input, OnInit } from '@angular/core';
import { LeisApiModel } from 'src/app/service/leis-api-model';

@Component({
  selector: 'app-leis-card',
  templateUrl: './leis-card.component.html',
  styleUrls: ['./leis-card.component.css']
})
export class LeisCardComponent implements OnInit {

  @Input() leis : LeisApiModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
