import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-page',
  templateUrl: './contato-page.component.html',
  styleUrls: ['./contato-page.component.css']
})
export class ContatoPageComponent implements OnInit {

  public logoUrl = 'https://saude.abril.com.br/wp-content/uploads/2020/07/viol%C3%AAncia-contra-a-mulher-pandemia.jpg';
  public titulo = 'DENUNCIE!';
  public descricao1 = 'Conhece alguém que está passando por isso?';
  public titulo2 = 'Disque 180';
  public titulo3 = 'Central de Atendimento à Mulher';
  public descricao2 = ' "O silêncio mata!" ';
  public descricao3 = 'Disponível diariamente, 24 horas por dia, incluindo sábados, domingos e feriados. As denúncias são registradas e encaminhadas aos órgãos competentes. Também é possível fazer reclamações, sugestões ou elogios sobre o funcionamento dos serviços de atendimento.';


  constructor() { }

  ngOnInit(): void {
  }

}
