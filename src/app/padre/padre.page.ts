import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.page.html',
  styleUrls: ['./padre.page.scss'],
})
export class PadrePage implements OnInit {

  public texto: string;

  constructor() { 
    this.texto = "componente padre";
  }

  ngOnInit() {
  }

}
