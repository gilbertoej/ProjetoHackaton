import { Component, OnInit } from '@angular/core';
import { LeisApiModel } from 'src/app/service/leis-api-model';
import { LeisApiService } from 'src/app/service/leis-api.service';


@Component({
  selector: 'app-leis-page',
  templateUrl: './leis-page.component.html',
  styleUrls: ['./leis-page.component.css']
})
export class LeisPageComponent implements OnInit {

  ListadeLeis: LeisApiModel[] = [{
    data:'',
    descricao:'',
    nome:'',
    site:''
  }
  ];

  constructor(public LeisApi: LeisApiService) { }

  ngOnInit(): void {
    this.LeisApi.get().subscribe({
      next: (retornodaApi) => {
        this.ListadeLeis = retornodaApi;
      }
    });
  }

}
