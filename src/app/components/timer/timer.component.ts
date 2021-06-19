import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
 segundos: number =0;
 minutos: number=0;
 mulheres: number=0;
 segundos2:number=0;
 minutos2: number=0;


  constructor() { }

  ngOnInit(): void {
    this.comecarcontardor();
  }
  comecarcontardor(){
    this.segundos = this.segundos + 1;
    if (this.segundos >= 10) {this.segundos2 = this.segundos2 + 1, this.segundos=0;
    if (this.segundos2>=6) {this.addminutos(), this.segundos2=0;

    }

    }
    setTimeout(() => {{this.comecarcontardor()

    }}, 1000);

  }
  addminutos(){
 this.minutos = this.minutos + 1;
 if (this.minutos >=8) {this.mulheres = this.mulheres + 1
 if (this.minutos>=10) {this.minutos2 = this.segundos2 + 1, this.minutos=0;

 }

 }
  }
}
