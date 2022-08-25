import { Component,  Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {


  @Input() datosDelPadre: string;
 // @Output() regresarAlPadre = new EventEmitter<string>();

  public texto: string;

  constructor() {
//componente hijo
    this.texto ="componente hijo";
   }

  ngOnInit() {}

}
