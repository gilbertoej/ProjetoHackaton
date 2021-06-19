import { Component, Input, OnInit } from '@angular/core';
import { InstituicoesApiModel } from 'src/app/service/instituicoes-api-model';


@Component({

  selector: 'app-instituicoes-card',
  templateUrl: './instituicoes-card.component.html',
  styleUrls: ['./instituicoes-card.component.css']
})

export class InstituicoesCardComponent implements OnInit {

  @Input() instituicao: InstituicoesApiModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
