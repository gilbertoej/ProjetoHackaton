import { Component, OnInit } from '@angular/core';
import { InstituicoesApiModel } from 'src/app/service/instituicoes-api-model';
import { InstituicoesApiService } from 'src/app/service/instituicoes-api.service';

@Component({
  selector: 'app-instituicoes-page',
  templateUrl: './instituicoes-page.component.html',
  styleUrls: ['./instituicoes-page.component.css']
})
export class InstituicoesPageComponent implements OnInit {

  listadeInstituicoes: InstituicoesApiModel[] = [];



  constructor(public InstituicoesApi: InstituicoesApiService) { }

  ngOnInit(): void {
    this.InstituicoesApi.get().subscribe({
      next: (retornodaApi2) => {
        this.listadeInstituicoes = retornodaApi2;
      }
    });
  }

}
